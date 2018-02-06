pragma solidity ^0.4.0;
contract GreenGoodGuyGas {
	string generationType;
	bool locked = false;

    struct ValueInTime {
        uint value;
		string locationType; // battery, consumer, generator
		string owner;
// 		address locationAddress; //  Blockchain address
    }

	ValueInTime[] valuesInTime;

    /// Create a new ballot with $(_numProposals) different proposals.
    function GreenGoodGuyGas (string locationType, string owner) public {
        valuesInTime.push(ValueInTime({
            value: 100,
            locationType: locationType,
			owner: owner
        }));
    }

	// TODO add location
	function calcDecay() public returns (uint) {
	    // Plug in Decay
		return ((valuesInTime[valuesInTime.length - 1].value ) * 9)/10;
	}

	function getValuesInTime(uint index) public constant returns (uint, string, string) {
		return (valuesInTime[index].value, valuesInTime[index].owner, valuesInTime[index].locationType);
	}

	function getValuesInTimeLength() public constant returns (uint) {
		return valuesInTime.length;
	}

	function newValueInTime(string locationType, string owner) public {
		if (locked) {
			return;
		}

		uint decayed = calcDecay();

		valuesInTime.push(ValueInTime({
			value: decayed,
			locationType: locationType,
			owner: owner
		}));

	    lockContract(locationType);
	}

	function getDecaySinceGeneration() public constant returns (uint) {
		return valuesInTime[0].value - valuesInTime[valuesInTime.length - 1].value;
	}

	function lockContract(string locationType) {
		if (keccak256(locationType) == keccak256("consumer")) {
		    locked = true;
		}
	}
}
