import React, { useEffect } from "react";
import { useState } from 'react';
import {
    Grid, Button,
    TextField,
    MenuItem,
    Dialog, DialogTitle, Checkbox, Select, Chip, Box
} from '@material-ui/core';
import Axios from "axios";
import * as yup from 'yup';
import "./calender.css";





const userSchema = yup.object().shape({

    Title: yup.string().required(),
    Description: yup.string().required(),
    Project_Url: yup.string().required(),
    Technology: yup.string().required(),
    options_years: yup.string().required(),
    options_months: yup.string().required(),
    options_years1: yup.string().required(),
    options_months1: yup.string().required()

})





export default function App() {

    const [detail, setDetail] = useState({});
    const [formValue, setFormValue] = useState({});

    const [isSubmit, setIsSubmit] = useState(false)



    const getformdata = async () => {
        await fetch('http://localhost:786/user/getLastData')
            .then((d) => d.json())
            .then((d) => {
                console.log(d[0]); setDetail(d[0]);
            })

    }



    const url = 'http://localhost:786/user/register'
    const [data, setData] = useState({

        Title: '',
        Description: '',
        Project_Url: '',
        Technology: '',
        options_months: '',
        options_years: '',
        options_months1: '',
        options_years1: '',



    })



    const handle = (e) => {
        const newData = { ...data }
        newData[e.target.name] = e.target.value

        setData(newData);
        setFormValue(newData)

    }



    var st_month;
    var end_month;
    var st_year;
    var end_year;
    var end_map_month;
    var st_map_month;

    const handleSubmit = async (e) => {


        e.preventDefault();

        let formData = {

            Title: data.Title,
            Description: data.Description,
            Project_Url: data.Project_Url,
            Technology: data.Technology,
            options_months: data.options_months,
            options_years: data.options_years,
            options_months1: data.options_months1,
            options_years1: data.options_years1
        }




        console.log(formData);

        // st_month = data.options_months;
        // st_year = data.options_years;
        // end_month = data.options_months1;
        // end_year = data.options_years1;
        // st_map_month = options_months_newmap1.get(data.options_months);
        // end_map_month = options_months_newmap1.get(data.options_months1);

        // console.log(st_month);
        // console.log(st_year);
        // console.log(end_month);
        // console.log(end_year);
        // console.log(st_map_month);
        // console.log(end_map_month);




        const isValid = await userSchema.isValid(formData);
        if (isValid)

            console.log("valid", isValid)
        setIsSubmit(true);

        if (isValid) {
            Axios.post(url, {
                Title: data.Title,
                options_months: data.options_months,
                options_years: data.options_years,
                Description: data.Description,
                Project_Url: data.Project_Url,
                Technology: data.Technology,
                options_months1: data.options_months1,
                options_years1: data.options_years1,

            })
                .then(res => {
                    console.log(res);
                })

            closeModel(true);

        }



    }


    const options_years = [
        {
            label: "1999",
            value: "1999"
        },
        {
            label: "2000",
            value: "2000"
        },
        {
            label: "2001",
            value: "2001"
        },
        {
            label: "2002",
            value: "2002"
        },
        {
            label: "2003",
            value: "2003"
        },
        {
            label: "2004",
            value: "2004"
        },
        {
            label: "2005",
            value: "2005"
        },

        {
            label: "2006",
            value: "2006"
        },
        {
            label: "2007",
            value: "2007"
        },
        {
            label: "2008",
            value: "2008"
        },
        {
            label: "2009",
            value: "2009"
        },
        {
            label: "2010",
            value: "2010"
        },
        {
            label: "2011",
            value: "2011"
        },
        {
            label: "2012",
            value: "2012"
        },
        {
            label: "2013",
            value: "2013"
        },
        {
            label: "2014",
            value: "2014"
        },
        {
            label: "2015",
            value: "2015"
        },
        {
            label: "2016",
            value: "2016"
        },
        {
            label: "2017",
            value: "2017"
        },
        {
            label: "2018",
            value: "2018"
        },
        {
            label: "2019",
            value: "2019"
        },
        {
            label: "2020",
            value: "2020"
        },
        {
            label: "2021",
            value: "2021"
        },
        {
            label: "2022",
            value: "2022"
        }
    ];


    const options_months = [
        {
            label: "January",
            value: "1"
        },
        {
            label: "February",
            value: "2"
        },
        {
            label: "March",
            value: "3"
        },
        {
            label: "April",
            value: "4"
        },
        {
            label: "May",
            value: "5"
        },
        {
            label: "June",
            value: "6"
        },
        {
            label: "July",
            value: "7"
        },
        {
            label: "August",
            value: "8"
        },
        {
            label: "September",
            value: "9"
        },
        {
            label: "October",
            value: "10"
        },
        {
            label: "November",
            value: "11"
        },
        {
            label: "December",
            value: "12"
        }
    ];

    const options_years1 = [
        {
            label: "1999",
            value: "1999"
        },
        {
            label: "2000",
            value: "2000"
        },
        {
            label: "2001",
            value: "2001"
        },
        {
            label: "2002",
            value: "2002"
        },
        {
            label: "2003",
            value: "2003"
        },
        {
            label: "2004",
            value: "2004"
        },
        {
            label: "2005",
            value: "2005"
        },

        {
            label: "2006",
            value: "2006"
        },
        {
            label: "2007",
            value: "2007"
        },
        {
            label: "2008",
            value: "2008"
        },
        {
            label: "2009",
            value: "2009"
        },
        {
            label: "2010",
            value: "2010"
        },
        {
            label: "2011",
            value: "2011"
        },
        {
            label: "2012",
            value: "2012"
        },
        {
            label: "2013",
            value: "2013"
        },
        {
            label: "2014",
            value: "2014"
        },
        {
            label: "2015",
            value: "2015"
        },
        {
            label: "2016",
            value: "2016"
        },
        {
            label: "2017",
            value: "2017"
        },
        {
            label: "2018",
            value: "2018"
        },
        {
            label: "2019",
            value: "2019"
        },
        {
            label: "2020",
            value: "2020"
        },
        {
            label: "2021",
            value: "2021"
        },
        {
            label: "2022",
            value: "2022"
        }
    ];
    const options_months1 = [
        {
            label: "January",
            value: "1"
        },
        {
            label: "February",
            value: "2"
        },
        {
            label: "March",
            value: "3"
        },
        {
            label: "April",
            value: "4"
        },
        {
            label: "May",
            value: "5"
        },
        {
            label: "June",
            value: "6"
        },
        {
            label: "July",
            value: "7"
        },
        {
            label: "August",
            value: "8"
        },
        {
            label: "September",
            value: "9"
        },
        {
            label: "October",
            value: "10"
        },
        {
            label: "November",
            value: "11"
        },
        {
            label: "December",
            value: "12"
        }
    ];


    let options_months_newmap = new Map([
        ["1", "January"],
        ["2", "February"],
        ["3", "March"],
        ["4", "Arpil"],
        ["5", "May"],
        ["6", "June"],
        ["7", "July"],
        ["8", "August"],
        ["9", "September"],
        ["10", "October"],
        ["11", "November"],
        ["12", "December"]
    ]);



    let options_months_newmap1 = new Map([
        ["January", 1],
        ["February", 2],
        ["March", 3],
        ["Arpil", 4],
        ["May", 5],
        ["June", 6],
        ["July", 7],
        ["August", 8],
        ["September", 9],
        ["October", 10],
        ["November", 11],
        ["December", 12]
    ]);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250
            }
        }
    };
    const Technology = [
        {
            label: "C++",
            value: "C++"
        },
        {
            label: "Java",
            value: "Java"
        },
        {
            label: "Python",
            value: "Python"
        },
        {
            label: "ReactJs",
            value: "ReactJs"
        },
        {
            label: "NodeJs",
            value: "NodeJs"
        },
        {
            label: "SpringBoot",
            value: "SpringBoot"
        },
        {
            label: "ExpressJs",
            value: "ExpressJs"
        },
        {
            label: "VueJs",
            value: "VueJs"
        },
        {
            label: "Ruby on Rails",
            value: "Ruby on Rails"
        },
        {
            label: "TypeScript",
            value: "TypeScript"
        },

    ];


    const [openM, setOpenM] = useState(false);
    const openModel = () => {
        setOpenM(true)
        getformdata();
    }
    const closeModel = () => {
        setOpenM(false)
    }




    const [checked, setChecked] = useState(true);
    const handlecheck = () => {
        setChecked(!checked);
    }

    return (

        <>
            <Button onClick={openModel}>open</Button>
            <form onSubmit={handleSubmit}>
                <Dialog
                    open={openM}
                    onClose={closeModel}
                    fullWidth
                    maxWidth='md'
                    overflow='hidden'

                >
                    {/* Education detail logic */}
                    <DialogTitle>
                        <Grid container spacing={2}>
                            <Grid item xs={11} >
                                Academic/Personal Project Details

                            </Grid>
                            <Grid item xs={1}>
                                <Button onClick={closeModel} style={{ paddingLeft: 2 }}>X</Button>

                            </Grid>

                        </Grid>



                    </DialogTitle>

                    {/* Title logic */}

                    <Grid container direction='column' spacing={2} style={{ paddingLeft: 20, paddingRight: 15 }}>

                        <Grid item xs={12}>
                            <label>Title</label>
                            <TextField id="outlined-basic"
                                variant="outlined"
                                placeholder='Eg:Movie Bazaar'
                                fullWidth='md'
                                required
                                size="small"
                                name='Title'
                                onChange={(e) => { handle(e) }}
                                value={data.Title}


                            />

                            {data.Title === '' && isSubmit && <b style={{ color: "red" }}>require</b>}
                        </Grid>

                        checkbox logic

                        <Grid container spacing={4}>
                            <Grid item sx={6} style={{ paddingLeft: 15, paddingRight: 10 }}>
                                <Checkbox color="Primary" onClick={handlecheck} />
                            </Grid>
                            <Grid item sx={6} style={{ paddingLeft: 1, paddingRight: 10, paddingTop: 25 }}>
                                Currently Working On the Project
                            </Grid>

                        </Grid>

                        {/* starting from logic */}

                        <Grid container spacing={2} style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <Grid item xs={3}>
                                <label> Starting From*</label>
                                <TextField id="outlined-basic"
                                    select
                                    variant="outlined"

                                    size="small"
                                    fullWidth
                                    name='options_months'
                                    required
                                    value={data.options_months}
                                    onChange={(e) => { handle(e) }}

                                >

                                    {options_months.map((option) => (
                                        <MenuItem key={option.value} value={options_months_newmap.get(option.value)}>
                                            {option.label}
                                        </MenuItem>
                                    ))}


                                </TextField>

                                {/* b1=st year b2=end_year */}

                                {data.options_months === '' && isSubmit && <b style={{ color: "red" }}>require</b>}

                            </Grid>

                            <Grid item xs={3}>
                                <label>.</label>
                                <TextField id="outlined-basic"
                                    select
                                    variant="outlined"

                                    size="small"
                                    fullWidth
                                    name='options_years'
                                    required
                                    value={data.options_years}
                                    onChange={(e) => { handle(e) }}


                                >
                                    {options_years.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                {data.options_years === '' && isSubmit && <b style={{ color: "red" }}>require</b>}

                            </Grid>

                            {/* ending grid  logic*/}

                            {checked && (<Grid item xs={3}>
                                <label>Ending In*</label>
                                <TextField id="outlined-basic"
                                    select
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    name='options_months1'
                                    required
                                    value={data.options_months1}
                                    onChange={(e) => { handle(e) }}

                                >
                                    {options_months1.map((option) => (
                                        <MenuItem key={option.value} value={options_months_newmap.get(option.value)}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                {/* time check logic for ending and starting */}

                                {data.options_months1 === '' && isSubmit && <b style={{ color: "red" }}>require</b>}
                                {data.options_years1 != '' && isSubmit && data.options_years === data.options_years1 && options_months_newmap1.get(data.options_months) > options_months_newmap1.get(data.options_months1) && <b style={{ color: "red" }} >End Month should be greater than Start Month</b>}
                            </Grid>)}

                            {/* checkbox and ending in erasing logic code */}

                            {checked && (<Grid item xs={3}>
                                <label>.</label>
                                <TextField id="outlined-basic"
                                    select
                                    variant="outlined"

                                    size="small"
                                    fullWidth
                                    name='options_years1'
                                    required
                                    value={data.options_years1}
                                    onChange={(e) => { handle(e) }}

                                >
                                    {options_years1.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                {data.options_years1 === '' && isSubmit && <b style={{ color: "red" }}>require</b>}
                                {data.options_years1 != '' && isSubmit && data.options_years > data.options_years1 && <b style={{ color: "red" }} >End Year should be greater than start Year</b>}




                            </Grid>)}
                        </Grid>

                        <Grid item xs={12}>
                            <label>  Description</label>

                            <TextField id="outlined-basic1"
                                variant="outlined"
                                placeholder="Short Description About Project"
                                required
                                fullWidth
                                name='Description'
                                multiline
                                rows={2}
                                onChange={(e) => { handle(e) }}
                                value={data.Description}

                            />
                            {data.Description === '' && isSubmit && <b style={{ color: "red" }}>require</b>}
                        </Grid>

                        <Grid item xs={12} >
                            <label>Project Url</label>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Eg:"
                                required
                                size="small"
                                fullWidth
                                name='Project_Url'
                                value={data.Project_Url}
                                onChange={(e) => { handle(e) }}

                            />
                            {data.Project_Url === '' && isSubmit && <b style={{ color: "red" }}>require</b>}
                        </Grid>



                        <Grid item xs={12}>
                            <label>Technology</label>
                            <TextField id="outlined-basic"
                                select
                                multiple
                                variant="outlined"
                                size="small"
                                fullWidth
                                name='Technology'
                                required
                                value={data.Technology}
                                onChange={(e) => { handle(e) }}

                            >
                                {/* <MenuProps /> */}
                                {Technology.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>



                            {data.Technology === '' && isSubmit && <b style={{ color: "red" }}>require</b>}

                        </Grid>



                    </Grid>
                    <br />

                    <br />
                    <Grid style={{ paddingLeft: 20, color: 'blue' }}>
                        <Button variant="contained" type="submit" onClick={handleSubmit} className='btn'>save</Button>
                    </Grid>
                    <br />


                </Dialog>
            </form>
        </>
    )
}

