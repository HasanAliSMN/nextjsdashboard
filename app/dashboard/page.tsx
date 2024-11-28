import "./Dashboard.module.css"

export default function Page() {
  const singleDigit = [1, 6, 5, 2];
  const numbers = [3456, 24589037, 2, 12, 23545234, 2967, 1238, 1092370, 12, 1];

    return <main>
      <div className="hasanali border-dashed border-black border-4 bg-orange-300 p-8 w-72 flex flex-col justify-center rounded-lg text-center">
          <h1 className="bg-slate-400 hover:text-sky-200"><strong><em>Dashboard</em></strong></h1>
          <div>
          <ul className="bg-green-400 text-left">
              {basamak(numbers).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
          </div>
      </div>
    </main>;
}

/*MAYBE TODO:
    this sends user an array containing parsed strings
    send like this:
    {
      ["3x100", "5x10", "1"]             
    }
      maybe this would be a better aproach
*/
function basamak(arr: number[]): string[]{
  const retVal: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    //for every elemnt find the val and push to retVal
    const val: string = arr[i].toString();
    let basamak: string = onlar(val);
    retVal.push(basamak);
  }
  console.log(retVal);
  return retVal;
}
function onlar(str: string): string{
  let retVal: string = "";
  if(str.length == 1) return str + "x1";
  for (let i = 0; i < str.length; i++) {
      /* 0-1-2-3 */
     retVal = retVal + str.charAt(i) + "x" + amk(str.length - i - 1);
  }
  return retVal;
}
function amk(num: number): string{
  let retVal: string = "1";
  for (let i = 0; i < num; i++) {
    retVal += "0"; 
  }
  return retVal  + " ";
} 