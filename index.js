
const ticket = document.querySelectorAll('button')

const selectBtn = () => {
  ticket.forEach((selectTicket) => {
    selectTicket.addEventListener('click', () => {
      const divToPrint = selectTicket.childNodes[1];
      const date = new Date().toLocaleString()
      let htmlToPrint = `<style>
       body{
         font-size: 25px;
         font-family: 'Open Sans', sans-serif;
         text-align:center;
         padding:3px;
        }
        </style>`;
      htmlToPrint = htmlToPrint + divToPrint.outerHTML + date;
      newWin = window.open("");
      newWin.document.write(htmlToPrint);
      newWin.print();
      newWin.close();
    })
  })
}

selectBtn()

