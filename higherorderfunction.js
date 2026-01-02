let oonchange = (value) => {
    console.log("changed value:", value)
}

let myhigherorderfunc = (oonchange, orgvalue) => {
    let changedvalue = `changed ${orgvalue}`
    oonchange(changedvalue)
}

// calling higher order function:
myhigherorderfunc(oonchange, "temp value")

// alternative way of calling
myhigherorderfunc(
    (v) => {
        console.log("my value is:", v)
    },
    "org value"
)
