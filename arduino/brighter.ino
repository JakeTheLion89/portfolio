const int buttonPin1 = 2;
const int buttonPin2 = 3;
const int ledPin1 = 9;

void setup() {
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(ledPin1, OUTPUT);
  digitalWrite(buttonPin1,HIGH);
  digitalWrite(buttonPin2,HIGH) ;
}

int ledBrightness = 128;

void loop() {
  if(digitalRead(buttonPin1) == LOW){
    ledBrightness--;
  }
  else if(digitalRead(buttonPin2) == LOW){
    ledBrightness++;
  }
  
  ledBrightness = constrain(ledBrightness, 0, 225);
  analogWrite(ledPin1, ledBrightness);
  delay(20);  
}
