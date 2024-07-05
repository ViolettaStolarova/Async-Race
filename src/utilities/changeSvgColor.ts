export function changeSvgColor(svgString: string, newColor: string): string {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = svgString;
  const svgElement = tempDiv.firstChild as SVGSVGElement;

  const paths = svgElement.querySelectorAll('path');

  paths.forEach((path) => {
    if (!path.getAttribute('fill')) {
      path.setAttribute('fill', newColor);
    }
  });

  return svgElement.outerHTML;
}
