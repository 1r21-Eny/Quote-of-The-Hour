(function() {
    const quotes = [
        { quote: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain", vibe: "Perhaps today is one of those days." },
        { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", vibe: "Authenticity is the soul's native language." },
        { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", vibe: "Every obstacle conceals a doorway." },
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", vibe: "Passion transforms labor into art." },
        { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon", vibe: "The present moment is all we truly possess." },
        { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu", vibe: "Every great achievement starts small." },
        { quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche", vibe: "Adversity forges character." },
        { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi", vibe: "Transformation begins within." },
        { quote: "The unexamined life is not worth living.", author: "Socrates", vibe: "Self-reflection illuminates our path." },
        { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde", vibe: "Are you living or merely existing?" },
        { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", vibe: "Hope shines brightest in darkness." },
        { quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha", vibe: "This breath, this moment, is everything." },
        { quote: "The best time to plant a tree was twenty years ago. The second best time is now.", author: "Chinese Proverb", vibe: "Today is always the perfect beginning." },
        { quote: "Everything you can imagine is real.", author: "Pablo Picasso", vibe: "Imagination is the blueprint of reality." },
        { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", vibe: "Your inner world shapes everything." },
        { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins", vibe: "The first step is always possible." },
        { quote: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa", vibe: "Love magnifies the smallest gesture." },
        { quote: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw", vibe: "You are both the artist and the canvas." },
        { quote: "The mind is everything. What you think you become.", author: "Buddha", vibe: "Thoughts shape our reality." },
        { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey", vibe: "Pain can become our greatest teacher." },
        { quote: "The best way out is always through.", author: "Robert Frost", vibe: "Courage means continuing forward." },
        { quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", author: "Plato", vibe: "Truth requires courage to face." },
        { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama", vibe: "Joy is created, not discovered." },
        { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", vibe: "Resilience defines our character." },
        { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius", vibe: "Simplicity holds profound wisdom." },
        { quote: "May you live every day of your life.", author: "Jonathan Swift", vibe: "Full presence is the greatest gift." },
        { quote: "Not all those who wander are lost.", author: "J.R.R. Tolkien", vibe: "Sometimes the path reveals itself slowly." },
        { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", vibe: "Start exactly where you stand." },
        { quote: "Everything has beauty, but not everyone sees it.", author: "Confucius", vibe: "Beauty awaits those who truly look." },
        { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama", vibe: "Happiness is not selfish, it's essential." },
        { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West", vibe: "Quality of life matters more than length." },
        { quote: "In the end, we only regret the chances we didn't take.", author: "Lewis Carroll", vibe: "Courage rarely disappoints." },
        { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson", vibe: "Your uniqueness is your power." },
        { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", vibe: "Persistence outlasts speed." },
        { quote: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr.", vibe: "Your voice has weight and purpose." },
        { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", vibe: "Destiny bends to intention." },
        { quote: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau", vibe: "Your dreams deserve your commitment." },
        { quote: "When I let go of what I am, I become what I might be.", author: "Lao Tzu", vibe: "Release opens the door to transformation." },
        { quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair", vibe: "Fear guards the threshold of growth." },
        { quote: "We know what we are, but know not what we may be.", author: "William Shakespeare", vibe: "Our potential remains mysteriously vast." },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", vibe: "Faith precedes achievement." },
        { quote: "I have not failed. I've just found ten thousand ways that won't work.", author: "Thomas Edison", vibe: "Every attempt teaches something." },
        { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein", vibe: "Innovation requires experimentation." },
        { quote: "The person who says it cannot be done should not interrupt the person who is doing it.", author: "Chinese Proverb", vibe: "Action silences doubt." },
        { quote: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy", vibe: "Your mind creates your boundaries." },
        { quote: "You miss one hundred percent of the shots you don't take.", author: "Wayne Gretzky", vibe: "Inaction guarantees nothing." },
        { quote: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford", vibe: "Belief becomes self-fulfilling." },
        { quote: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy", vibe: "Some victories unfold slowly." },
        { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein", vibe: "Contribution outlasts achievement." },
        { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale", vibe: "Accountability is freedom." },
        { quote: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand", vibe: "Permission is not required." },
        { quote: "Life shrinks or expands in proportion to one's courage.", author: "Anaïs Nin", vibe: "Bravery shapes the size of your world." },
        { quote: "What we think, we become.", author: "Buddha", vibe: "Consciousness creates reality." },
        { quote: "The best revenge is massive success.", author: "Frank Sinatra", vibe: "Excellence is the finest response." },
        { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt", vibe: "Growth lives beyond comfort." },
        { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi", vibe: "Rising matters more than falling." },
        { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington", vibe: "Generosity elevates everyone." },
        { quote: "Champions keep playing until they get it right.", author: "Billie Jean King", vibe: "Mastery demands repetition." },
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", vibe: "Action answers all questions." },
        { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", vibe: "Consistency creates momentum." },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", vibe: "Vision precedes reality." },
        { quote: "It is never too late to be what you might have been.", author: "George Eliot", vibe: "Your potential has no expiration date." },
        { quote: "A man is but the product of his thoughts. What he thinks, he becomes.", author: "Mahatma Gandhi", vibe: "Thoughts sculpt our being." },
        { quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.", author: "Dalai Lama", vibe: "Rejection can be redirection." },
        { quote: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou", vibe: "Creativity multiplies through use." },
        { quote: "Dream big and dare to fail.", author: "Norman Vaughan", vibe: "Failure is the price of ambition." },
        { quote: "Nothing is impossible. The word itself says I'm possible.", author: "Audrey Hepburn", vibe: "Language shapes possibility." },
        { quote: "You define your own life. Don't let other people write your script.", author: "Oprah Winfrey", vibe: "You hold the pen." },
        { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", vibe: "Age does not diminish possibility." },
        { quote: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou", vibe: "Your presence can brighten darkness." },
        { quote: "Spread love everywhere you go.", author: "Mother Teresa", vibe: "Love is meant to be shared." },
        { quote: "When you have a dream, you've got to grab it and never let go.", author: "Carol Burnett", vibe: "Dreams require fierce commitment." },
        { quote: "There is nothing impossible to they who will try.", author: "Alexander the Great", vibe: "Will overcomes obstacles." },
        { quote: "The bad news is time flies. The good news is you're the pilot.", author: "Michael Altshuler", vibe: "You control your trajectory." },
        { quote: "Life has got all those twists and turns. You've got to hold on tight and off you go.", author: "Nicole Kidman", vibe: "Embrace the unpredictable journey." },
        { quote: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: "Walt Whitman", vibe: "Focus determines what follows." },
        { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", vibe: "Persistence transcends outcomes." },
        { quote: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou", vibe: "Spirit cannot be conquered." },
        { quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.", author: "Albert Camus", vibe: "Inner strength outlasts external circumstances." },
        { quote: "Never limit yourself because of others' limited imagination.", author: "Mae Jemison", vibe: "Others cannot see your full potential." },
        { quote: "Be kind whenever possible. It is always possible.", author: "Dalai Lama", vibe: "Kindness is always within reach." },
        { quote: "You are enough just as you are.", author: "Meghan Markle", vibe: "Wholeness requires nothing added." },
        { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", vibe: "Excellence demands sacrifice." },
        { quote: "Normality is a paved road: it's comfortable to walk but no flowers grow.", author: "Vincent van Gogh", vibe: "Beauty blooms beyond convention." },
        { quote: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett", vibe: "You underestimate your own power." },
        { quote: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela", vibe: "Bravery is acting despite fear." },
        { quote: "Real change, enduring change, happens one step at a time.", author: "Ruth Bader Ginsburg", vibe: "Progress accumulates gradually." },
        { quote: "Wake up determined, go to bed satisfied.", author: "Dwayne Johnson", vibe: "Daily intention shapes a life." },
        { quote: "Nobody built like you, you design yourself.", author: "Jay-Z", vibe: "You are your own architect." },
        { quote: "Find out who you are and do it on purpose.", author: "Dolly Parton", vibe: "Intentional living is powerful." },
        { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", vibe: "Character forms through repetition." },
        { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", vibe: "Doubt is tomorrow's only obstacle." },
        { quote: "It always seems impossible until it's done.", author: "Nelson Mandela", vibe: "Achievement redefines impossible." },
        { quote: "Don't count the days, make the days count.", author: "Muhammad Ali", vibe: "Quality matters more than quantity." },
        { quote: "You are the one that possesses the keys to your being. You carry the passport to your own happiness.", author: "Diane von Furstenberg", vibe: "You hold your own answers." },
        { quote: "If I cannot do great things, I can do small things in a great way.", author: "Martin Luther King Jr.", vibe: "Greatness exists in every scale." },
        { quote: "My mission in life is not merely to survive, but to thrive.", author: "Maya Angelou", vibe: "Life calls us to flourish." },
        { quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale", vibe: "Perspective creates experience." },
        { quote: "The only way to have a friend is to be one.", author: "Ralph Waldo Emerson", vibe: "Connection requires reciprocity." }
    ];
    
    const card = document.getElementById('reflectionCard');
    const cardLight = card.querySelector('.card-light');
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const vibeLine = document.getElementById('vibeLine');
    const refreshButton = document.getElementById('refreshButton');
    
    let isHovering = false;
    let animationFrame = null;
    
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
    
    function displayQuote(quoteData) {
        quoteText.textContent = '"' + quoteData.quote + '"';
        quoteAuthor.textContent = '— ' + quoteData.author;
        vibeLine.textContent = quoteData.vibe;
    }
    
    function updateQuote() {
        const quote = getRandomQuote();
        displayQuote(quote);
    }
    
    function initQuote() {
        updateQuote();
    }
    
    refreshButton.addEventListener('click', function() {
        updateQuote();
    });
    
    setInterval(function() {
        updateQuote();
    }, 3600000);
    
    card.addEventListener('mouseenter', function() {
        isHovering = true;
    });
    
    card.addEventListener('mouseleave', function() {
        isHovering = false;
        
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        
        animationFrame = requestAnimationFrame(function() {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            cardLight.style.background = 'linear-gradient(135deg, rgba(120, 90, 180, 0.25), rgba(200, 120, 80, 0.25), rgba(80, 120, 180, 0.25))';
            cardLight.style.opacity = '0.5';
        });
    });
    
    card.addEventListener('mousemove', function(e) {
        if (!isHovering) return;
        
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        
        animationFrame = requestAnimationFrame(function() {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 5;
            const rotateX = ((centerY - y) / centerY) * 5;
            
            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
            
            const normalizedX = x / rect.width;
            const normalizedY = y / rect.height;
            
            const duskViolet = interpolateColor(
                [88, 66, 124],
                [60, 40, 100],
                1 - normalizedX
            );
            
            const dawnOrange = interpolateColor(
                [200, 120, 80],
                [220, 140, 100],
                normalizedX
            );
            
            const twilightBlue = interpolateColor(
                [80, 120, 180],
                [100, 140, 200],
                normalizedY
            );
            
            const intensity = 0.3 + (normalizedY * 0.15);
            
            const gradient = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(' + duskViolet[0] + ', ' + duskViolet[1] + ', ' + duskViolet[2] + ', ' + intensity + '), rgba(' + dawnOrange[0] + ', ' + dawnOrange[1] + ', ' + dawnOrange[2] + ', ' + (intensity * 0.8) + '), rgba(' + twilightBlue[0] + ', ' + twilightBlue[1] + ', ' + twilightBlue[2] + ', ' + (intensity * 0.6) + '))';
            
            cardLight.style.background = gradient;
            cardLight.style.opacity = '0.7';
        });
    });
    
    function interpolateColor(color1, color2, factor) {
        return color1.map(function(channel, i) {
            return Math.round(channel + (color2[i] - channel) * factor);
        });
    }
    
    initQuote();
})();
