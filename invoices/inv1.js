import jsPDF from 'jspdf';
import 'jspdf-autotable';
var template=({inv_no="jbsd342uv45r534",date="2020-9-2",clientName="Jhon Doe",clientAddress="C-236/1 Khudadad Colony Karachi kbdsbadsv sdauhfasudb jbksjafvds ugbafjhdsvf",products=[],balance=0,tax=0,note="There is no note. ",handleLongStatements,handleNote,formatter}={})=>{
    var x=20;
    var y=50;
    var PDF=new jsPDF();
    PDF.setFontSize(28);
    PDF.text("Invoice",x,y);

    /*===============Invoice Number==========*/
    y=y+15;
    PDF.setFontSize(8);
    PDF.setFontType("bold");
    PDF.text("INVOICE NUMBER",x,y);

    PDF.setFontSize(8);
    PDF.setFontType("normal");
    PDF.text(inv_no,x,y+5);
    /*===============Invoice Number==========*/

    /*===============Invoice Date==========*/
    PDF.setFontSize(8);
    PDF.setFontType("bold");
    PDF.text("DATE OF ISSUE",x+60,y);

    PDF.setFontSize(8);
    PDF.setFontType("normal");
    PDF.text(date,x+60,y+5);
    /*===============Invoice Date==========*/

    /*===============Invoice Bill to==========*/
    y=y+15;
    PDF.setFontSize(8);
    PDF.setFontType("bold");
    PDF.text("BILLED TO",x,y);

    PDF.setFontSize(8);
    PDF.setFontType("bold");
    PDF.text(clientName,x,y+5);

    /*================ADDRESS================*/

    y=y+7;
    var address=clientAddress;
    PDF.text(handleLongStatements(address),x,y);
   
    /*===============Invoice bill to==========*/

   /*================FROM ELECTROSOFT ==================*/

    PDF.setFontSize(8);
    PDF.text("FROM: ",x+110,y-7);
    PDF.setFontSize(9);
    PDF.text("ELECTROSOFT TECHNOLOGIES ",x+110,y-2);
    PDF.setFontSize(8);
    var companyAddress="ICCBS Technology Park & Technology Incubation Center, Karachi University, Karachi, Pakistan.";
    PDF.text(handleLongStatements(companyAddress),x+110,y);
    y=y+13;
    PDF.text("0340-2211539",x+110,y);
    PDF.text("electrosoft.tech@gmail.com",x+110,y+3);

    /*================FROM ELECTROSOFT ==================*/

    /*================Products Table ==================*/
    y=y+10;

    var data=products;

    var styles={
        startY:y,
        theme:'grid',
        margin : {
          top: 10,
          bottom: 10,
          left: 20,
          right: 20,
          width: 500
      },
      headStyles: {
          cellWidth: 'wrap',
          cellPadding: 2,
          lineWidth: 0,
          valign:'top',
          fontStyle: 'bold',
          halign: 'left',
          fillColor:[0,0,0],
          fontSize:8, 
          textColor: [255, 255, 255]
      },
      bodyStyles: {
          fontSize:8
      }
    };

    PDF.autoTable(['Description', 'Per Hour Cost', 'Total Hours',"Quantity",'Amount'],data,styles);
    var height=Math.round(PDF.previousAutoTable.finalY);
    /*================Products Table ==================*/

    /*========SUB TOTAL==========*/
    PDF.setFontSize(8);
    y=height+15;
    var subTotal=0;
    data.forEach((item)=>{
        subTotal+=item[4];
    });
    PDF.setFontType("normal");
    PDF.text("SUBTOTAL",x+110,y);

    PDF.setFontType("bold");
    PDF.text(formatter(subTotal),x+130,y);

    PDF.setDrawColor("#000000");
    PDF.line(x+130,y+3,x+170,y+3);

    var total=balance+tax+subTotal;
    /*========SUB TOTAL==========*/


    /*========INVOICE TOTAL==========*/
    y=height+15;
    
    PDF.setFontType("normal");
    PDF.text("INVOICE TOTAL",x,y);

    PDF.setFontType("bold");
    PDF.setFontSize(20);
    PDF.text(formatter(total),x,y+8);    
    /*========INVOICE TOTAL==========*/
 

    /*========Balance============*/
    PDF.setFontSize(8);
    y=y+8;

    PDF.setFontType("normal");
    PDF.text("BALANCE",x+110,y);

    PDF.setFontType("bold");
    PDF.text(formatter(balance),x+130,y);

    PDF.setDrawColor("#000000");
    PDF.line(x+130,y+3,x+170,y+3);
    /*========Balance============*/

    /*========Tax============*/
    PDF.setFontSize(8);
    y=y+8;

    PDF.setFontType("normal");
    PDF.text("TAX",x+110,y);

    PDF.setFontType("bold");
    PDF.text(formatter(tax),x+130,y);

    PDF.setDrawColor("#000000");
    PDF.line(x+130,y+3,x+170,y+3);
    /*========Tax============*/

    /*========Total============*/
    PDF.setFontSize(8);
    y=y+8;

    PDF.setFontType("normal");
    PDF.text("TOTAL",x+110,y);

    PDF.setFontType("bold");
    PDF.text(formatter(total),x+130,y);

    PDF.setDrawColor("#000000");
    PDF.line(x+130,y+3,x+170,y+3);

    /*========Total============*/

    /*========Note============*/
    PDF.setFontSize(7);
    y=y+7;

    PDF.setFontType("bold");
    PDF.text("NOTE:",x,y);

    var statement=note;
    PDF.text(handleNote(statement),x,y+3);
    /*========Note============*/


    PDF.save("invoice");
};

export default template;
