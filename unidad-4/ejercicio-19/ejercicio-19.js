function ejercicio19( canvas, figures )
{
	let ctx = canvas.getContext('2d');

	for (let i = 0; i < figures.length; i++)
	{
		let currentFigure = figures[i];
		let ia = 0;
        let fa = 2 * Math.PI;

		if (currentFigure.type === "circulo")
		{
            ctx.lineWidth = currentFigure.thickness;
            
            if(currentFigure.lineType === "solid")
            {
                ctx.setLineDash([])
            }
            else
            {
                ctx.setLineDash([5, 15])
            }

			ctx.beginPath();
            ctx.arc(currentFigure.x, currentFigure.y, currentFigure.radio, ia, fa);
            ctx.stroke();
		}
		else if (currentFigure.type === "poligono")
		{
            ctx.lineWidth = currentFigure.thickness;
            
            if(currentFigure.lineType === "solid")
            {
                ctx.setLineDash([])
            }
            else
            {
                ctx.setLineDash([5, 15])
            }
            
			ctx.beginPath();
			ctx.moveTo(currentFigure.points[0][0] + currentFigure.x, currentFigure.points[0][1] + currentFigure.y);

			for (let point = 1; point < currentFigure.points.length; point++)
			{
				ctx.lineTo(currentFigure.points[point][0] + currentFigure.x, currentFigure.points[point][1] + currentFigure.y)
			}

			ctx.closePath();
			ctx.stroke();
		}
        else if (currentFigure.type === "cakeGraph")
        {
            let xc = canvas.width/2;
            let yc = canvas.height/2;
            let radius = Math.min(canvas.width, canvas.height) / 2;
            let accumulatedAngle = 0;

            for (let i = 0; i < currentFigure.slices.length; i++)
            {
                let ia = accumulatedAngle * (2 * Math.PI);
                let fa = ia + (currentFigure.slices[i].percentage * (2 * Math.PI));

                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);

                ctx.beginPath();
                ctx.moveTo(xc, yc);
                ctx.arc(xc, yc, radius, ia, fa);
                ctx.closePath();
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fill();

                accumulatedAngle = accumulatedAngle + currentFigure.slices[i].percentage;

                let middleAngle = (ia + fa) / 2;
                let radio = radius / 2;
                let x = xc + radio * Math.cos(middleAngle);
                let y = yc + radio * Math.sin(middleAngle);
                ctx.fillStyle = "black";
                ctx.fillText(currentFigure.slices[i].label + ": " + currentFigure.slices[i].percentage * 100 + "%", x, y);
                
            }
        }
	}
}


