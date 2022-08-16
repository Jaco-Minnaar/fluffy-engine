import readline from "readline";

enum PatientStatus {
  NewPatient = "new",
  ReturningPatient = "returning",
  DeadPatient = "zombie",
}

class Patient {
  name: string;
  surname: string;
  age: number;
  status: PatientStatus;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const patient = new Patient();

rl.question("What is your name? ", function (answer) {
  patient.name = answer;

  rl.question("What is your surname? ", function (answer) {
    patient.surname = answer;

    rl.question("What is your age? ", function (answer) {
      patient.age = parseInt(answer);

      rl.question(
        "What is the status of the patient? <New/Returning/Dead>",
        function (answer) {
          if (answer == "New") {
            patient.status = PatientStatus.NewPatient;
          } else if (answer == "Returning") {
            patient.status = PatientStatus.ReturningPatient;
          } else if (answer == "Dead") {
            patient.status = PatientStatus.DeadPatient;
          } else {
            console.log("Unknown Status: imploding");
            process.exit();
          }

          console.log(patient);
        }
      );
    });
  });
});
