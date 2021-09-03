
const ticket = document.querySelectorAll('button')

const selectBtn = () => {
  ticket.forEach((selectTicket) => {
    selectTicket.addEventListener('click', () => {
      const divToPrint = selectTicket.childNodes[1];

      let htmlToPrint = '' +
        '<style type="text/css">' +
        'table th, table td {' +
        'border:1px solid #000;' +
        'padding;0.5em;' +
        '}' +
        '</style>';
      htmlToPrint = `${htmlToPrint} ${divToPrint.outerHTML} `;
      newWin = window.open("");
      newWin.document.write(htmlToPrint);
      newWin.print();
      newWin.close();
    })
  })
}



selectBtn()
