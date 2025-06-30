@echo off
REM === CONFIGURA TUS DATOS ===
SET REPO_URL=https://github.com/rody216/eveliobustos.git
SET BUILD_DIR=build
SET DEPLOY_DIR=public-repo

REM === ELIMINA carpeta anterior si existe ===
IF EXIST %DEPLOY_DIR% (
    echo Eliminando carpeta %DEPLOY_DIR%...
    rmdir /S /Q %DEPLOY_DIR%
)

REM === CREA carpeta nueva para subir el sitio ===
echo Creando carpeta %DEPLOY_DIR%...
mkdir %DEPLOY_DIR%

REM === COPIA los archivos del build al nuevo directorio ===
echo Copiando archivos de %BUILD_DIR% a %DEPLOY_DIR%...
xcopy %BUILD_DIR%\* %DEPLOY_DIR%\ /E /I /Y

REM === NAVEGA a la carpeta del despliegue ===
cd %DEPLOY_DIR%

REM === INICIALIZA el repositorio Git y sube al branch gh-pages ===
echo Inicializando Git...
git init
git remote add origin %REPO_URL%
git checkout -b gh-pages

echo Agregando archivos y haciendo commit...
git add .
git commit -m "Deploy manual"

echo Subiendo a GitHub en el branch gh-pages...
git push -f origin gh-pages

echo ============================
echo  ¡Despliegue completado!
echo  Verifica en: https://rody216.github.io/eveliobustos/
echo ============================

pause
