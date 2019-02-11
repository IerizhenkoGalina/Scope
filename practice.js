const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region==="The Arctic"){
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
//Prints: Northern Lights // Inside the if block console.log(lightWaves) logs this value
//Prints: Moonlight // Outside the if block, but still within the function, the same statement logs
