interface Step{
    id: number;
    info: string;
    classes: string;
    image: string;
}

export const educationSteps: Step[] = [
    {
        id: 1,
        info: "High School Graduate, B.E.H.S (4) Thaketa, Yangon, Myanmar",
        classes: "items-center",
        image: "/behs.png",
    },
    {
        id: 2,
        info: "2016 ~ 2020 - Enrolled at TTU (Thanlyin Technological University) in 2016 and successfully completed coursework up to the fourth year. Currently on hiatus, taking a break from studies due to the impact of COVID-19 and political situation.",
        classes: "items-start sm:items-center lg:items-start",
        image: "/ttu.png",
    }
]