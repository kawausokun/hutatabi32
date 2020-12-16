//くるまのデータをグーグルからもらってきます。Get the car data reduced to just the varibles we are interested
// and cleaned of missing data.

async function getData() {
    const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataReq.json();
    const cleaned = carsData.map(car => ({
            mpg: car.Miles_per_Gallon,
            horsepower: car.Horsepower,
        }))
        .filter(car => (car.mpg != null && car.horsepower != null));

    console.log(carsDataReq);
    //console.log(carsData);

    return cleaned;
}

async function run() {
    const data = await getData();
    const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg,
    }));

    tfvis.render.scatterplot({ name: 'Horsepower v MPG' }, { values }, {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 300
    });

}

document.addEventListener('DOMContentLoaded', run);