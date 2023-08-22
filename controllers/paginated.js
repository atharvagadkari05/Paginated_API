
const final_paginated = async(req,res,next) =>{

    res.json(res.response_results.next)
}

module.exports = {final_paginated}