var studentDataFields = [
    {
        label: "sex",
        description: "Sex",
        evaluate: (data) => {
            if (data.toLowerCase() === "f") {
                return "Female"
            } else if (data.toLowerCase() === "m") {
                return "Male"
            }
        }
    },
    {
        label: "age",
        description: "Age",
        evaluate: (data) => {

        }
    },
    {
        label: "famsize",
        description: "Family size",
        evaluate: (data) => {

        }
    },
    {
        label: "Pstatus",
        description: "Parents' cohabitation status",
        evaluate: (data) => {

        }
    },
    {
        label: "Medu",
        description: "Mother's education",
        evaluate: (data) => {

        }
    },
    {
        label: "Fedu",
        description: "Father's education",
        evaluate: (data) => {

        }
    },
    {
        label: "Mjob",
        description: "Mother's job",
        evaluate: (data) => {

        }
    },
    {
        label: "Fjob",
        description: "Father's job",
        evaluate: (data) => {

        }
    },
    {
        label: "reason",
        description: "Reason to choose this school",
        evaluate: (data) => {

        }
    },
    {
        label: "guardian",
        description: "Guardian",
        evaluate: (data) => {

        }
    },
    {
        label: "traveltime",
        description: "Home to school travel time",
        evaluate: (data) => {

        }
    },
    {
        label: "studytime",
        description: "Weekly study time",
        evaluate: (data) => {

        }
    },
    {
        label: "failures",
        description: "Number of past class failures",
        evaluate: (data) => {

        }
    },
    {
        label: "schoolsup",
        description: "Extra educational support",
        evaluate: (data) => {

        }
    },
    {
        label: "famsup",
        description: "Family educational support",
        evaluate: (data) => {

        }
    },
    {
        label: "paid",
        description: "Extra paid classes within the course subject",
        evaluate: (data) => {

        }
    },
    {
        label: "activities",
        description: "Extra-curricular activities",
        evaluate: (data) => {

        }
    },
    {
        label: "nursery",
        description: "Attended nursery school",
        evaluate: (data) => {

        }
    },
    {
        label: "higher",
        description: "Wants to take higher education",
        evaluate: (data) => {

        }
    },
    {
        label: "internet",
        description: "Access to internet at home",
        evaluate: (data) => {

        }
    },
    {
        label: "romantic",
        description: "In a romantic relationship",
        evaluate: (data) => {

        }
    },
    {
        label: "famrel",
        description: "Quality of family relationships",
        evaluate: (data) => {

        }
    },
    {
        label: "freetime",
        description: "Free time after school",
        evaluate: (data) => {

        }
    },
    {
        label: "goout",
        description: "Social events with friends",
        evaluate: (data) => {

        }
    },
    {
        label: "Dalc",
        description: "Workday alcohol consumption"
    },
    {
        label: "Walc",
        description: "Weekend alcohol consumption",
        evaluate: (data) => {

        }
    },
    {
        label: "health",
        description: "Current health status",
        evaluate: (data) => {

        }
    },
    {
        label: "absences",
        description: "Number of school absences",
        evaluate: (data) => {

        }
    },
    {
        label: "G1",
        description: "First period grade",
        evaluate: (data) => {

        }
    },
    {
        label: "G2",
        description: "Second period grade",
        evaluate: (data) => {

        }
    }
]