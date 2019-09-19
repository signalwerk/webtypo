round() {
    printf "%.0f" "$1"
}
math() {
    echo "$*" | bc -l
}




converter() {
    converW=$1
    original=$2
    basename=$(basename "$original" .jpg)

    echo "start --- $converW --- $original"
    info=(`identify -format '%w %h' "./assets/$original"`)

    W=${info[0]}
    H=${info[1]}

    converH=$(round $(math "$converW / $W * $H") 0)

    mkdir -p "./assets/$basename/"
    convert "./assets/$original"  -resize $converW -quality 80 -colorspace sRGB "./assets/$basename/${basename}__${converW}x${converH}.jpg"


}

file="lake.jpg"
converter 1200 "$file"
converter 1000 "$file"
converter 800 "$file"
converter 600 "$file"
converter 400 "$file"
converter 200 "$file"
