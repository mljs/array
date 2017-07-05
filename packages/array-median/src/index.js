/**
 * Selects the k smallest element using [Floyd-Rivest algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Rivest_algorithm)
 * this is an in-place method.
 * @private
 * @param {Array<number>} array
 * @param {number} k
 * @return {number} - k smallest element of the array.
 */
function select(array, k) {
    function swap(i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var left = 0;
    var i;
    var right = array.length - 1;

    while (right > left) {
        if (array[k] < array[left]) swap(left, k);
        if (array[right] < array[left]) swap(left, right);
        if (array[right] < array[k]) swap(k, right);

        // partition the elements between left and right around t
        var t = array[k];
        i = left;
        var j = right;

        swap(left, k);

        if (array[right] > t) {
            swap(right, left);
        }

        while (i < j) {
            swap(i, j);
            i++;
            j--;

            while (array[i] < t) {
                i++;
            }

            while (array[j] > t) {
                j--;
            }
        }

        if (array[left] === t) {
            i--;
            swap(left, j);
        } else {
            j++;
            swap(j, right);
        }

        if (j <= k) {
            left = j + 1;
        } else if (k <= j) {
            right = j - 1;
        }

    }
    return array[k];
}

/**
 * /**
 * Computes the median of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function median(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    var l = input.length;
    if (l === 0) {
        return undefined;
    }

    var copy = new Array(l);
    for (var i = 0; i < l; ++i) {
        copy[i] = input[i];
    }
    var half = Math.floor(l / 2);
    if (l % 2 === 0) {
        return (select(copy, half - 1) + select(copy, half)) * 0.5;
    } else {
        return select(copy, half);
    }
}
