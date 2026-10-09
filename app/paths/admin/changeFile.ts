export function changeFile(e: any) {
  const url = URL.createObjectURL(e.target.files[0]);
  console.log(url);
}
