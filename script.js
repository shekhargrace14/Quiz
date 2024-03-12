fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        let QnAForm = document.querySelector(".QnAForm")
        // console.log(form);
        data.map((element, index) => {
            QnAForm.insertAdjacentHTML("beforeend", `
            <div class="column " >
                <form action="" id="form">
                    <label for="question" id=${element.correct_answer}>${element.question}</label> <br>
                    <input type="radio" value="${element.option1}" name="option" >${element.option1}</input> <br>
                    <input type="radio" value="${element.option2}" name="option" >${element.option2}</input> <br>
                    <input type="radio" value="${element.option3}" name="option" >${element.option3}</input> <br>
                    <input type="radio" value="${element.option4}" name="option" >${element.option4}</input> <br>
                    <input type="submit" value="Submit" class="button"} <br>
                </form>

                <p class="status"></p>
                <p class="user_selected_option_display"></p>
                <p class="correct_option_display"></p>
            </div>
        `)
        })

        let form = document.querySelector("#form")

            form.addEventListener("submit", (event) => {
                event.preventDefault();

                let radioButtonGroup = document.getElementsByName("option")
                let checkedRadioButton = Array.from(radioButtonGroup).find((radio) => radio.checked).value
                console.log(checkedRadioButton)
                let label = document.querySelector("label").id

                console.log(label)

                let userSelectedOptionDisplay = document.querySelector(".user_selected_option_display")
                let correctOptionDisplay = document.querySelector(".correct_option_display")


                if (checkedRadioButton === label) {
                    status.innerHTML = "Correct answer"
                    console.log("Correct answer")
                    userSelectedOptionDisplay.innerHTML = `Your Selected option ,${checkedRadioButton}`
                    correctOptionDisplay.innerHTML = `Correct option is , ${label}`

                } else {
                    status.innerHTML = "Wrong answer"

                    console.log("wrong answer")
                    userSelectedOptionDisplay.innerHTML = `Your Selected option ,${checkedRadioButton}`
                    correctOptionDisplay.innerHTML = `Correct option is , ${label}`
                }


            })
        })
