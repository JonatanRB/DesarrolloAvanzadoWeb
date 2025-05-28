const { z } = window.Zod;

const registerSchema = z.object({
    name: z.string().nonempty("Debes de ingresar un nombre"),
    email: z.string().email("Correo electrónico invalido"),
    password: z.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    try {
        registerSchema.parse(formData);
        alert("¡Registro exitoso!");
        document.getElementById("errors").textContent = "";
    } catch (error) {
        if (error.errors) {
            document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
        } else {
            document.getElementById("errors").textContent = "Error desconocido.";
        }
    }
});
