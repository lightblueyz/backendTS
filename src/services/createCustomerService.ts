import prismaClient from "../prisma";

class CreateCustomerService {
    async execute() {

        console.log("ERIK VIADO")

        return { ok: true }
    }
}

export { CreateCustomerService }