from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from os import listdir
from os import remove
from os.path import isfile, join

gauth = GoogleAuth('settings.yml')
drive = GoogleDrive(gauth)
directory_name = 'upload/'

upload_file_list = [f for f in listdir(directory_name) if isfile(join(directory_name, f))]

for upload_file in upload_file_list:
    gfile = drive.CreateFile({'parents': [{'id': '1k_Rr5EXur6e1QAgRI7oCndg0gJy7vswd'}]})
    gfile.SetContentFile(directory_name + upload_file)
    gfile.Upload()
    remove(directory_name + upload_file)