const ExtractRows = (data) =>{
    const rows = []
    for(let i = 0; i < data.length; i++){
        const row = {}
        row["name"] = data[i].name
        row["designation"] = data[i].designation
        row["email"] = data[i].email
        row["role"] = data[i].role
        rows.push(row)
    }
    console.log("rows: "+rows)
    return rows;
}

export default ExtractRows;