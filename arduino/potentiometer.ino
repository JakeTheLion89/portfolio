const int potPin = A0;
const int ledPin = 9;

void setup() {
  pinMode(potPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
 int ledBrightness;
 int sensorValue = 0;
 
 sensorValue = analogRead(potPin);
 ledBrightness = map(sensorValue, 0, 1023, 0, 255);
 
 analogWrite(ledPin, ledBrightness);

}
