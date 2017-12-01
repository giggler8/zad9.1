function getTriangleArea(a, h) {

if (a <= 0 || h <= 0) {
  value = ('incorrect data');
	return value;
} else {
	result = a * h / 2;
}
return result;
}
getTriangleArea();

var triangle1Area = getTriangleArea(0, 0),
	triangle2Area = getTriangleArea(12, 4),
	triangle3Area = getTriangleArea(3, 9);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);