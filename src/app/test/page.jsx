const Page = () => {

    const handleForm = async() => {
        "use server"

    }

    return(
        <div>
            <form action={handleForm}></form>
        </div>
    )
}