// http://127.0.0.1:5500/malharia_v1/
// Clicar em Go Live
// https://www.youtube.com/watch?v=HZ4D3wDRaec


// In the model, we set H:W = 2:1, so P = W = 4*d, and H = 8*d
// radius of the external cicle is 2*d
var d = 40; // Yarn diameter
var l = 1; // length is the cyclic length of the unit of the yarn
var r = d; // radius of the yarn modelS
var H = 8 * d; // Height of the weft plain
var P = 4 * d; // parallelogram with a height P
var W = 4 * d; // Width of the weft plain



function setup() {	
			
	let cnv = createCanvas(400, 400, WEBGL);
	background(0);
	cnv.position(50,100);
	
	
}
function draw() {
	// start
	// obtain d, l of yarn texture, and W_matrix (R,G,B) of yarn texture
	// estabilish of loop texture matrix S[8*d][4*d], the initial value of S[x][y] is (0,0,0)
	// According to the order region 1 to 6, executes x,y
	// Determine the x,y whether meet the current regional conditions
	// According to the region formula to calculate S[x][y]
	// S[x][y] is re assigned to new value according to the selected brightness variation curve
	// end

	

}

// If each pixel in the yarn’s model is regarded as an element and each element has three color properties (i.e., R, G, and B), then the yarn texture can be converted into a 2D matrix, called the texture matrix W:
// where wi,j denotes the RGB value of the pixel in the yarn texture, _i denotes the horizontal index, _j denotes the vertical index, _d denotes the total height of the pixels in the texture, and _l denotes the cyclic unit length of the yarn texture
function W_texture(_l,_d, _i, _j){

	var W_matrix = new Array(_d);

	for (let i = 0; i < _d; i++){
		W_matrix[i] = new Array(_l);
	}

	for (let i = 0; i < _d; i++){
		for(let j = 0; j < _l; j++){
			W_matrix[i][j] = random(0,255);
		}
	}

	return W_matrix;

}

// loop texture
// where sx,y is the RGB value of the pixel in the loop texture, x is the horizontal index, y is the vertical index, 8d is the total height of the pixels in the loop texture, and 4d is the width of the loop texture
function S_texture(_d, _x, _y){
}

// Transformation between the loop texture and the yarn texture
// To obtain the loop texture, the relationship between x, y coordionates and d, i, j
// should be constructed with the given yarn diameter d and the yarn texture matrix
// Because the loop model is fragmented geometrical shape, the transformation fucntion has to be defined for 
// different fragments.

function S1_region(x,y,d,n,l){
	radix = math.sqrt(x*x + (2*d - y)*(2*d - y))
	
	if (x > 0 & x <= 2*d & y > 0 & y <= 2*d){
		if (d < radix & radix <= 2*d){
			// n belongs to natural numbers
			i = (2*d * math.atan(x / (2*d - y))) - n * l;
			j = 2*d - radix;

			return [i,j];
		}
		else{
			return [0,0];
		}
	}
	else{
		return [0,0];
	}
}

function S2_region(x,y,d,n,l){



	if(x > 0 & x <= 2*d & y > 2*d & y <= 6*d){
		if (x > (6*d - y)/4 & x <= (10*d - y)/4){
			i = (2*d * math.atan(x / (2*d - y))) - n * l;
			j = 2*d - math.sqrt(x*x + (2*d - y)*(2*d - y));
			return [i,j];
		}
		else{	
			return [0,0];
		}
	}
		else{
			return [0,0];
		}
	}

function S3_region(x,y,d,n,l){

	radix = math.sqrt((2*d - x)*(2*d - x) + (y - 6*d)*(y - 6*d))

	if(x > 0 & x <= 2*d & y > 6*d & y <= 8*d){
		if(d < radix & radix <= 2*d){
			i = (PI*d + 4*d + 2*d * math.atan((y - 6*d)/(2*d - x))) - n * l;
			j = radix - d;
			return [i,j];
		}
		else{
			return [0,0];
		}
	}
	else{
		return [0,0];
	}
}