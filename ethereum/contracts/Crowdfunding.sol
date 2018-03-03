pragma solidity ^0.4.17;

/**
* This is a crowdfunding contract. Creator can make a campaign, and people can donate,
* much like Kickstarter. When time comes for creator to spend the money, he must create a request,
* describing what he's looking to buy, and to which address the money should be sent. Everyone who
* donated is eligible to vote, and if there are 50% or more votes, the request is approved, and
* funds can be transfered. It's like an extra layer of security on top of traditional crowdfunding
**/

// factory is responsible for deploying the campaigns and
// keeping track of all currently active (deployed) campaigns
contract CrowdfundingFactory {
    address[] private liveCampaigns;
    
    function createCampaign(uint minimum) public {
        address campaign = new Crowdfunding(minimum, msg.sender);
        liveCampaigns.push(campaign);
    }
    
    function getLiveCampaigns() public view returns (address[]) {
        return liveCampaigns;
    }
}

contract Crowdfunding {
    modifier owner() {
        require(msg.sender == manager);
        _;
    }
    
    modifier isApprover() {
        require(approvers[msg.sender]);
        _;
    }

    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    address public manager;
    uint public approversCount;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    
    // contstructor function setting minimum amount to contribute
    function Crowdfunding(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    // if you're looking to donate, this is your call
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    // request has some basic fields describing what is owner trying to purchase: 
    // "ex new laptops for developers", how much is he asking for, and who is the recipient
    function createRequest(string description, uint value, address recipient) public owner isApprover {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    // this is a way for a contributor to inspect the request and say
    // "Yes, you can spend my money towards that!"
    function approveRequest(uint requestId) public isApprover {
        Request storage request = requests[requestId];
        
        // check if approver has already voted
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    // When there are enough votes, the owner can trigger the
    // finalization of the request, and proceed with his work
    function finalizeRequest(uint requestId) public owner {
        Request storage request = requests[requestId];
        
        // check if request has not been completed
        require(!request.complete);
        
        // check if at least 50% approved the request
        require(request.approvalCount > (approversCount / 2));
        
        // transfer the balance and mark as completed
        request.recipient.transfer(request.value);
        request.complete = true; 
    }

    // Returns all info about the campaign, useful for displaying
    // the data for frontend application
    function getAllDetails() public view returns (
        uint, uint, uint, uint, address
    ) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    // Retrieves current number of requests
    function getRequestCount() public view returns (uint) {
        return requests.length;
    }
}