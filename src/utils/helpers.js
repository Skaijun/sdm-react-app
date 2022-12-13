// eslint-disable-next-line
export default {
    getImageURL: (price) => {
        let imgURL = '';

        // small improvement to have better UI visibility
        if (price < 40) {
            imgURL = '../products/fila_unwind_tee_gold_6450518_1143.jpg';
        } else if (price < 70) {
            imgURL = '../products/fila_aiken_tee_6601405_1118.jpg';
        } else if (price < 90) {
            imgURL = '../products/fila_buek_t_shirt_night_owl_6450928_1160.jpg';
        } else if (price < 110) {
            imgURL = '../products/fila_laurens_tee_6601500_1165.jpg';
        } else if (price < 130) {
            imgURL = '../products/fila_belsh_tee_moonless_night_6450912_1139.jpg';
        } else {
            imgURL = '../products/fila_umed_long_sleeve_polo_6450298_1141.jpg';
        }

        return imgURL;
    }
}