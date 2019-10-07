let player = document.getElementById('player')
let winningArrs = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function play(num) {
     console.log(document.getElementById(num).innerText)
    if (document.getElementById(num).innerText === '') {
      document.getElementById(num).innerText = player.innerText
      if (player.innerText === 'X') {
          player.innerText = 'O'
      }else if (player.innerText === 'O') {
          player.innerText = 'X'
      }
  }
  for (let i = 0; i < 8; i++) {
      let locCheck = []
      for (let j = 0; j < 3; j++) {
          let xOrO = document.getElementById(`${winningArrs[i][j]}`).innerText
          locCheck.push(xOrO)  
      }
      if (locCheck.join() === "X,X,X") {
          setTimeout(() => {
              if (confirm("Player X Wins!!!!")) {
                  location.reload()
              }
            }, 200)
      }else if (locCheck.join() === "O,O,O") {
          setTimeout(() => {
              if (confirm("Player O Wins!!!!")) {
                  location.reload()
              }}, 200)
      }
  }
}