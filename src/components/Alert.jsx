
const Alert = () => {
    
    return (
        Swal.fire({
            title: "¡Registro Exitoso!",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        })
    )
}

export default Alert