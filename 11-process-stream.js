process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    process.stdout.write('Data! ->' + chunk);
});

process.stdin.on('end', function () {
    process.stderr.write('End!\n');
});

process.on('SIGTERM', function () {
    process.stderr.write("Why stop ? :-|");
})

console.log("Node is running process #" + process.pid);