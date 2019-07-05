import {
    getPosts,
    getUser,
    savePost,
    getPost,
    deletePost
} from "./lib.js";


var customers;


document.body.onload = async function () {

    //Delete Selected Customer
    async function deleteCurrentClick(id) {

        let res = await deletePost(id);

    }

    //Get Customers
    customers = await getPost();

    if (customers.length == 0) {
        document.getElementById("customersTable").style.display = "none";

        document.getElementById("customers").innerHTML = "No customers to display";
    } else {
        var table = document.getElementById("customersTable");

        for (let i = 0; i < customers.length; i++) {

            let tr = document.createElement("tr");

            let tdID = document.createElement("td");
            tdID.textContent = customers[i].id;
            tr.appendChild(tdID);

            let tdFirstName = document.createElement("td");
            tdFirstName.textContent = customers[i].firstName;
            tr.appendChild(tdFirstName);

            let tdLastName = document.createElement("td");
            tdLastName.textContent = customers[i].lastName;
            tr.appendChild(tdLastName);

            let tdEmail = document.createElement("td");
            tdEmail.textContent = customers[i].email;
            tr.appendChild(tdEmail);

            let tdMobile = document.createElement("td");
            tdMobile.textContent = customers[i].mobile;
            tr.appendChild(tdMobile);

            let tdButton = document.createElement("input");
            tdButton.setAttribute("type", "button");
            tdButton.setAttribute("value", "  X  ")
            tdButton.setAttribute("id", customers[i].id);
            tdButton.setAttribute("class", "btn btn-info");

            // tdButton.setAttribute("onclick", `deleteCurrentClick(${customers[i].id})`);
            //tdButton.setAttribute("onclick", `deleteCurrentClick(${customers[i].id})`);
            tdButton.onclick = deleteCurrentClick.bind(null, customers[i].id);
            tr.appendChild(tdButton);

            table.appendChild(tr);
        }
    }


    //Save User input
    document.forms[0].addEventListener("submit", async function submitForm(e) {
        e.preventDefault();

        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let email = document.querySelector("#email").value;
        let mobile = document.querySelector("#mobile").value;
        let body = {
            firstName,
            lastName,
            email,
            mobile
        };
        let createdPost = await savePost(body);
        let {
            id
        } = createdPost;
        alert(`Added successfully with id: ${id}`);
    });




}