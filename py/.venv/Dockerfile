FROM python:3.8-alpine
WORKDIR /

COPY ./py/.venv/requirements.txt ./requirements.txt

RUN pip3 install -r requirements.txt
COPY ./py/.venv/. .

EXPOSE 3004


#CMD flask --app app.py run -> NO fucking andaba!
#En la siguiente instruccion hay algo que funciona, que el RUN anterior no lo tenia
#Creo que es esto de definir --host = 
#CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"] 

CMD flask --app app.py run --host=0.0.0.0

