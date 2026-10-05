let scriptInput = "";
let gpomSelected = document.getElementById('gpom').checked;
let portaGpom = "";
if(gpomSelected) {
    if(document.getElementById('ETH').checked) {
        portaGpom = "ETH";
    }else if (document.getElementById('GIGA').checked) {
        portaGpom = "GIGA";
    }
}

function reescreverScript() {
    const circuito = document.getElementById('circuito').value;
    const ipoi = document.getElementById('ipoi').value;
    const vlan = document.getElementById('vlan').value;

    let porta;
    const comSwitch = document.getElementById('comSwitch');
    const semSwitch = document.getElementById('semSwitch');
    if (comSwitch.checked) {
      porta = comSwitch.value;
    } else if (semSwitch.checked) {
      porta = semSwitch.value;
    }

if (document.getElementById('serial').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
1
`
:
`
2
`
;}
else if (document.getElementById('gpom').checked && document.getElementById('ETH').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
3
`
:
`
4
`
;}
else if (document.getElementById('gpom').checked && document.getElementById('GIGA').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
5
`
:
`
6
`
;}  
else  {
    scriptInput = `
Selecione uma opção válida
`
;}
const script_alterado = alterarScript(scriptInput, circuito, ipoi, vlan, porta);
document.getElementById('scriptOutputRouter').innerText = script_alterado;

const scriptOutputRouter = document.getElementById('scriptOutputRouter');
const scriptContent = scriptOutputRouter.innerText.trim();

const copyButtonRouter = document.getElementById('copyButtonRouter');
 if (scriptContent.trim().length > 0) {
   copyButtonRouter.style.display = 'block';
 } else {
   copyButtonRouter.style.display = 'none';
 }

}