
let string = " ";
let string1 = " ";
let string2 = " ";

const buttons = document.querySelectorAll('.buttons');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>
    {
        // Equals
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            string1 = document.querySelector('.output').textContent = string;
            string2 = string;
            string = " ";
        }

        // Full Delete
        else if(e.target.innerHTML == 'AC')
        {
            string =" ";
            string1 = document.querySelector('.output').textContent = string;
            string2 = " ";
        }

        // Addition
        else if(e.target.innerHTML == '+')
        {
            if(string1!== " " && string !== " ")
            {
                string = string + "+";
                document.querySelector('.output').textContent = string;
            }

            else if(string2 !== " ")
            {
                string = string2 + "+";
                document.querySelector('.output').textContent = string;
            }

            else if(string == " ")
            {
                document.querySelector('.output').textContent = "Invalid Format used.";               
            }

            else
            {
                string = string + "+";
                document.querySelector('.output').textContent = string;
            }
        }

        // Subtraction
        else if(e.target.innerHTML == '-')
        {
            if(string1 !== " " && string !== " ")
            {
                string = string + "-";
                document.querySelector('.output').textContent = string;
            }

            else if(string2 !== " ")
            {
                string = string2 + "-";
                document.querySelector('.output').textContent = string;
            }

            else if(string == " ")
            {
                document.querySelector('.output').textContent = "Invalid Format used.";               
            }
            
            else
            {
                string = string + "-";
                document.querySelector('.output').textContent = string;
            }
        }

        // Multiplication
        else if(e.target.innerHTML == '*')
        {
            if(string1 !== " " && string !== " ")
            {
                string = string + "*";
                document.querySelector('.output').textContent = string;
            }

            else if(string2 !== " ")
            {
                string = string2 + "*";
                document.querySelector('.output').textContent = string;
            }

            else if(string == " ")
            {
                document.querySelector('.output').textContent = "Invalid Format used.";               
            }
            
            else
            {
                string = string + "*";
                document.querySelector('.output').textContent = string;
            }
        }

        // Division
        else if(e.target.innerHTML == '/')
        {
            if(string1 !== " " && string !== " ")
            {
                string = string + "/";
                document.querySelector('.output').textContent = string;
            }

            else if(string2 !== " ")
            {
                string = string2 + "/";
                document.querySelector('.output').textContent = string;
            }

            else if(string == " ")
            {
                document.querySelector('.output').textContent = "Invalid Format used.";               
            }
            
            else
            {
                string = string + "/";
                document.querySelector('.output').textContent = string;
            }
        }

        // Modulus
        else if(e.target.innerHTML == '%')
        {
            if(string1 !== " " && string !== " ")
            {
                string = string + "%";
                document.querySelector('.output').textContent = string;
            }

            else if(string2 !== " ")
            {
                string = string2 + "%";
                document.querySelector('.output').textContent = string;
            }

            else if(string == " ")
            {
                document.querySelector('.output').textContent = "Invalid Format used.";               
            }
            
            else
            {
                string = string + "%";
                document.querySelector('.output').textContent = string;
            }
        }

        // Dot
        else if(e.target.innerHTML == '.')
        {
            if(string1 !== " " && string  !== " ")
            {
                string = string + ".";
                document.querySelector('.output').textContent = string;
            }

            else if(string == " ")
            {
               string = document.querySelector('.output').textContent = "0.";               
            }
            
            else
            {
                string = string + ".";
                document.querySelector('.output').textContent = string;
            }
        }

        // Delete
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('.output').textContent = string;
        }        

        else
        {
            string = string + e.target.innerHTML;
            document.querySelector('.output').textContent = string;
        }
    })
});


let icon = document.querySelector(".icon");
icon.onclick = function()
{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme'))
    {
        icon.src = "light-theme.png";
    }

    else
    {
        icon.src = "dark-theme.png"
    }
};
