
function paginatedAPI (Users){
    
return async(req,res,next) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit)

    const start_index = (page-1)*limit
    const last_index = page*limit

    const paginated_results = {};

    if(start_index>0){
           paginated_results.previous = {
            prev:page-1,
            limit:limit
        }
    }

    if(last_index<Users.length){
        paginated_results.next ={
            next:page+1,
            limit:limit
        }
    }
    
    paginated_results.results = Users.slice(start_index,last_index);

    res.response_results = paginated_results

    next();

 }
}


module.exports = paginatedAPI