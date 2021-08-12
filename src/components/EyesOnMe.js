// Code EyesOnMe Component Here

function EyesOnMe(){
    function focus(){
        console.log('Good!')

    }
    function blur (){
        console.log('Hey! Eyes on me!')
    }

    return (
            <button onFocus={focus} onBlue={blur}> Eyes on me </button>
    )
}



export default EyesOnMe
