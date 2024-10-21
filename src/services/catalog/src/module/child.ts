import { exec, spawn } from 'child_process';

export function run() {
  console.log(`process #${process.pid} is started`);
  const child = exec(
    'echo hello from a child process',
    (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return;
      }

      console.log(`child process #${child.pid}`, stdout);
    },
  );
}

export function run2() {
  const child2 = spawn('echo', ['hello', ' from']);
}
