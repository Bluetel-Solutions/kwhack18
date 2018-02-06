contract HelloWorld {
    string name;
    
    function HelloWorld(string _name) public {
        name = _name;
    }

    function getName() public view returns (string) {
        return name;
    }
}