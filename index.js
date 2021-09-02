const ticket = document.querySelectorAll('img')


const selectBtn = () => {
  ticket.forEach((selectTicket, index) => {
    selectTicket.addEventListener('click', () => {
      const printTicket = selectTicket.src;
      const W = window.open(printTicket);

      W.window.print()
    })
  })
}

selectBtn()