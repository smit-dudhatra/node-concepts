bodyparser.json() >> parses request body that are in json format

similar to express.json()

bodyparser.urlencoded >> parses the request body that are in form format ex name="abc" , age = "12" etc..

similar to bodyparser.urlencoded()

bodyparser.text >> not that much useful

bodyparser.raw >> not that much useful

in mode cases we will use bodyparser as seperate module
since it is always available and gets frequent updates also
