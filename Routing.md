app.use vs app.all (both will handle all kind of HTTP requests)

app.use >> takes only one callback , will check if path starts with specified url or not , for middlewares
app.all >> takes multiple callbacks , will match complete path , for route handling

app.use vs app.get

app.use >> called for all request if url is not specified
app.get >> only called when HTTP method is GET

string patterns

ab?cd >> acd or abcd >> ? means optional
ab+cd >> abbcd , abbbbcd and so on >> + means repetation
ab*cd >> abcd , abxxxxcd >> * means group of words

for query params >> req.query
for path params >> req.params

this is just basic and regular infomation that needed in day to day life
more description can only be get from the documentation only

if app.use contains
multiple handler functions then next('route') and next('router')  will not work in this case
and handlers will be executed

except 'route' or 'router' , express will through error

configurable middleware means a function that
will return the function with (req,res,next) signature and will process the passed params to the outer function


