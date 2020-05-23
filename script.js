function insert(num)
{
    document.form.result.value = document.form.result.value+num;
}

function equal()
{
    var exp = document.form.result.value;
    document.form.result.value = eval(exp);
}

function clean()
{
    document.form.result.value = "";
}

function back()
{
    var exp = document.form.result.value;
    document.form.result.value = exp.substring(0, exp.length-1);
}