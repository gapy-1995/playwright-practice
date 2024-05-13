import {APIRequest, APIResponse, test} from "@playwright/test"

test.describe("Valid call API expect status code should be 200", async ()=> {
    test("POST form data create new user", {tag:['@smoke','@api']} async ({request}) => {
        const response :APIResponse = await request.post("https://practice.expandtesting.com/notes/api/users/register", {
            form: {
                "name": "abcttt",
                "email": "zxc@gmail.com",
                "password": "123tas"
            }
        })

        console.log(await response.json())
    })

    test("POST restAPI login with new user", {tag:['@smoke','@API']}, async({request}) => {
        const formData: FormData = new FormData()
        const response : APIResponse = await request.post("https://practice.expandtesting.com/notes/api/users/login", {
            data: {

            }
        })
    })
}) 