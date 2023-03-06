/*
*   Website 10 "information technology law"
*   Desgined by MAYANK
*   script : data
*/
try
{
    /*
        LAW DATA :
    */
    var law_data = [
        ["SECTION 3 ","AUTHENTICATION OF ELECTRONIC RECORDS BY USE OF DIGITAL SIGNATURE","Welcome to the superhere"],
        ["SECTION 3A ","ANUTHENTICATION OF ELECTRONIC RECORDS BY USE OF ELECTRONIC SIGNATURE",""],
        ["SECTION 4 ","ELECTRONIC RECORDS", " "],
        ["SECTION 5 ","LEGALRECONGNITION OF ELECTRONIC SIGNATURE","  "],
        ["SECTION 6 ","FOUNDATION OF ELETRONIC GOVERRNANCE","  "],
        ["SECTION 7 ","RETENTION OF RECORDS","  "],
        ["SECTION 8 ","PUBLICATION  OF RULE REGULATION ETC, IN ELECTRONIC GAZETTE","  "],
        ["SECTION 9","NO RIGHT TO INSIST DOCUMENT. TO BE IN ELECTRONIC FORM",""],
        ["SECTION 10","POWER TO MAKE RULES BY CENTRAL GOVERNMENT IN RESPECT OF ELECTRONIC SIGNATURE","  "],
        ["SECTION 11","ATTRIBUTION OF ELECTRONIC RECORDS","  "],
        ["SECTION 12","ACKNOWLEGDMENT OF RECEIPT","  "],
        ["SECTION 13","TIME AND PLACE OF DESPACTCH AND RECEIPT OF ELECTRONIC RECORDS","  "],
        ["SECTION 14","SECURE ELECTRONIC RECORD","  "],
        ["SECTION 15","SECURE ELECTRONIC SIGNATURE","  "],
        ["SECTION 16","SECURITY PROCEDURE","  "],
        ["SECTION 17","APPOINTMENT OF CONTROLLER AND OTHER OFFICERS","  "],
        ["SECTION 18","FUNCTIONS OF CONTROLLER","  "],
        ["SECTION 19","RECOGNITION OF FOREIGN CERTIFING AUTHORITIES","  "],
        ["SECTION 21","LICENCE TO ISSUE ELECTRONIC SIGNATURE CERTIFICATES","  "],
        ["SECTION 22","APPLICATION FOR LICENCE","  "],
        ["SECTION 25","SUSPENSION OF LICENCE","  "],
        ["SECTION 30","OBLIGATIONS OF THE CA ","  "],
        ["SECTION 35","CERTIFYING AUTHORITY TO ISSUE ELECTRONIC SIGNATURE SERTIFICATE","  "],
        ["SECTION 43","PENALTY FOR DAMAGE OF COMPUTER, COMPUTER SYSTEM, ETC","  "],
        ["SECTION 43A","COMPENSATION FOR FAILURE TO PROTECT DATA","  "],
        ["SECTION 46","POWER TO ADJUDICATE","  "],
        ["SECTION 58","PROCEDURE AND POWERS OF THE CYBER APPELLATE TRIBUNAL","  "],
        ["SECTION  62","APPEAL TO HIGH COURT","  "],
        ["SECTION 63","COMPOUNDING OF CONTRAVENTIONS","  "]    
    ];
    /*
        Search Bar:
    */
    document.write("<input type='search' id='search_bar' placeholder='Search & Read IT Law Of India'>");    
    /*
        Section Details:
    */
    for(var i=0; i<law_data.length; i++)
    {
        if(i == 0)
            document.write("<details open='true'>");
        else
            document.write("<details>");
            document.write("<summary><div>"+law_data[i][0]+"</div><div>"+law_data[i][1]+"</div></summary>");
            document.write("<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, est. Earum deserunt fuga nesciunt magnam adipisci accusamus quas inventore eaque enim quam aliquid exercitationem, iusto iste libero dolores voluptatum deleniti suscipit quod, nisi dicta ipsa, obcaecati fugit magni. Voluptas cumque accusantium aliquid labore consequatur nostrum nisi corrupti, quas harum cum eos nam, consectetur, possimus eligendi nesciunt doloribus? Accusantium magnam autem quaerat tempora vel corrupti molestiae placeat reprehenderit aliquid at culpa ullam reiciendis accusamus commodi dicta, qui recusandae, vero esse, odit officia! Libero dolorem qui vel ut quidem consequatur facere magnam, saepe commodi eum? Unde, perspiciatis eveniet saepe pariatur libero consectetur.</p>");
            document.write("</details>");
    }
    /*
        Search Bar code:
    */
    let search = document.getElementById("search_bar");

    let data_list = document.querySelectorAll("details");

    search.onkeyup = () =>
    {
        for(var i=0; i<law_data.length; i++)
        {
            var data = data_list[i].innerHTML;
            
            data_list[i].style.display = (data.toUpperCase().indexOf(search.value) > -1)? ' ' : 'none';
            
            if(search.value == '')  data_list[i].style.display = '';
        }
    }

}
catch(error)
{
    alert(console.error("Error : Data traversal code! "+error));
}