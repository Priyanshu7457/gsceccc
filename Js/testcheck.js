class Quiz {
    constructor(quizData) {
        this.quizData = quizData;
        this.questionElement = document.getElementById("question");
        this.optionsContainer = document.getElementById("options");
        this.nextButton = document.getElementById("next-button");
        this.submitButton = document.getElementById("submit-button");
        this.anchorArray = Array.from(document.getElementsByTagName("a"));
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.submitButton.disabled = true;
        this.nextButton.disabled = true;
        this.registerEventListeners();
    }

    registerEventListeners() {
        this.nextButton.addEventListener("click", () => this.loadNextQuestion());
        this.submitButton.addEventListener("click", () => this.showFinalScore('Congrats'));
    }

    startQuiz() {
        this.showQuestion();
    }

    showQuestion() {
        const question = this.quizData[this.currentQuestionIndex];
        this.questionElement.innerText = question.question;
        this.optionsContainer.innerHTML = "";
        question.options.forEach((option) => {
            const optionElement = document.createElement("div");
            optionElement.classList.add("option");
            optionElement.innerText = option;
            optionElement.addEventListener("click", () => this.selectOption(option, question.correctAnswer, optionElement));

            this.optionsContainer.appendChild(optionElement);
        });
    }
    selectOption(selectedOption, correctAnswer, optionElement) {
        const allOptions = document.querySelectorAll(".option");

        // Check if any option has been selected
        const hasSelectedOption = Array.from(allOptions).some((option) => option.classList.contains("correct") || option.classList.contains("wrong"));

        // If no option has been selected, allow the click action
        if (!hasSelectedOption) {
            allOptions.forEach((option) => option.removeEventListener("click", () => this.selectOption())); // Remove event listener from all options

            if (selectedOption === correctAnswer) {
                optionElement.classList.add("correct");
                this.correctAnswers++;
            } else {
                optionElement.classList.add("wrong");
                const correctOption = Array.from(allOptions).find((option) => option.innerText === correctAnswer);
                if (correctOption) {
                    correctOption.classList.add("correct");
                }
            }
            this.nextButton.disabled = false;
        }
    }


    loadNextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.quizData.length) {
            this.showQuestion();
            this.nextButton.disabled = true;
        } else {
            this.nextButton.disabled = true;
            this.submitButton.disabled = false;
        }
    }

    showFinalScore(data) {
        const totalQuestions = this.quizData.length;
        const percentage = (this.correctAnswers / totalQuestions) * 100;
        // let c = data;
        let grade;
        console.log(typeof percentage);
        if (percentage < 50) {
            data = 'You Are Fail';
            grade = null;
            Quiz.output(data, percentage, totalQuestions, this.correctAnswers, grade);

        } else if (percentage >= 50 && percentage <= 54) {
            grade = 'D';
            Quiz.output(data, percentage, totalQuestions, this.correctAnswers, grade);
        } else if (percentage >= 55 && percentage <= 64) {
            grade = 'C';
            Quiz.output(data, percentage, totalQuestions, this.correctAnswers, grade);
        } else if (percentage >= 65 && percentage <= 74) {
            grade = 'B';
            Quiz.output(data, percentage, totalQuestions, this.correctAnswers, grade);
        } else if (percentage >= 75 && percentage <= 84) {
            grade = 'A';
            Quiz.output(data, percentage, totalQuestions, this.correctAnswers, grade);
        } else if (percentage >= 85 && percentage <= 100) {
            grade = 'S';
            Quiz.output(data, percentage, totalQuestions, this.correctAnswers, grade);
        }
        // document.querySelector('.alert-content').innerHTML = `<span class="close-btn" onclick="closeCustomAlert()">&times;</span><br/>${data}<br/>You answered ${this.correctAnswers} out of ${totalQuestions} questions correctly!<br/>Percentage: ${percentage.toFixed(2)}%`;
    }

    static output(data, percentage, totalQuestions, correctAnswer, grade) {
        document.querySelector('.alert-content').innerHTML = `<span class="close-btn" onclick="closeCustomAlert()">&times;</span><br/>${data}<br/> You Obtain Grade:${grade} <br/>You answered ${correctAnswer} out of ${totalQuestions} questions correctly!<br/>Percentage: ${percentage.toFixed(2)}%    <br/>
        
        <div class='table-box'>
        Grading System <br/>
         <table>
         <tr>
         <td>
         Marks
         </td>
         <td>
         Grade
         </td>
         </tr>
         <tr>
         <td>
         >=85%
         </td>
         <td>
         S-Grade
         </td>
         </tr>
         <tr>
         <td>
         >=75%
         </td>
         <td>
         A-Grade
         </td>
         </tr>
          <tr>
         <td>
         >=65%
         </td>
         <td>
         B-Grade
         </td>
         </tr>
          <tr>
         <td>
         >=55%
         </td>
         <td>
         C-Grade
         </td>
         </tr>
          <tr>
         <td>
         >=50%
         </td>
         <td>
         D-Grade
         </td>
         </tr>
          <tr>
         <td>
         <50%
         </td>
         <td>
        Fail
         </td>
         </tr>
         </table>
         </div>`;
    }


}


