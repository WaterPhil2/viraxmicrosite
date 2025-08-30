from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import stripe
import os

app = Flask(__name__, static_folder=\'static\', static_url_path=\'/static\')
CORS(app)

# Configure Stripe (use environment variables in production)
stripe.api_key = os.environ.get(\'STRIPE_SECRET_KEY\', \'sk_test_51PZ412Rj4gY6tY2h0i0j0k0l0m0n0o0p0q0r0s0t0u0v0w0x0y0z0A0B0C0D0E0F0G0H0I0J0K0L0M0N0O0P0Q0R0S0T0U0V0W0X0Y0Z0\')

@app.route(\'/\')
def serve_index():
    return send_from_directory(app.static_folder, \'index.html\')

@app.route(\'/api/create-payment-intent\', methods=[\'POST\'])
def create_payment_intent():
    try:
        data = request.get_json()
        amount = data[\'amount\']
        currency = data.get(\'currency\', \'eur\')

        intent = stripe.PaymentIntent.create(
            amount=int(amount * 100),  # Amount in cents
            currency=currency,
            metadata={\'product_name\': \'Déboucheur à pompe Virax 290210\'}
        )
        return jsonify({\'clientSecret\': intent[\'client_secret\']})
    except Exception as e:
        return jsonify(error=str(e)), 403

@app.route(\'/api/confirm-payment\', methods=[\'POST\'])
def confirm_payment():
    try:
        data = request.get_json()
        payment_intent_id = data[\'paymentIntentId\']
        payment_intent = stripe.PaymentIntent.confirm(payment_intent_id)
        return jsonify({\'status\': payment_intent.status})
    except Exception as e:
        return jsonify(error=str(e)), 403

@app.route(\'/api/create-order\', methods=[\'POST\'])
def create_order():
    data = request.get_json()
    # In a real application, you would save this order to a database
    print(f\

