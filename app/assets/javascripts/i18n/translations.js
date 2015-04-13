var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","in_between":"must be in between %{min} and %{max}","spoofed_media_type":"has an extension that does not match its contents","already_confirmed":"was already confirmed, please try signing in","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","expired":"has expired, please request a new one","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"}},"sorry":"Sorry!","hmm":"Hmmm...","resource_not_found":"We couldn't find that page","forbidden":"Access not unauthorized","internal_error":"Something went wrong..."},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}},"models":{"user":{"attributes":{"password":{"too_short":null,"blank":null},"password_confirmation":{"confirmation":null},"username":{"taken":null,"blank":null}}},"campaign":{"attributes":{"title":{"too_short":null}}}}},"models":{"survey":"Survey","campaign":"Campaign","input":"Input","user":"User"},"attributes":{"campaign":{"title":"Name","description":"Description","goal":"Goal","submissions_target":"Number of desired responses","data_collectors":"Data collectors","audience":"Target audience","status":"Status","start_date":"Start date","end_date":"End date","theme":"Theme","organizers":"Campaign organizers"},"input":{"input_type":"Type of response"},"survey":{"title":null},"user":{"username":"Username","bio":"Bio / Description","password":"Password","password_confirmation":"Password confirmation","current_password":"Current password","email":"Email"}},"options":{"themes":{"select":"Select","economics":"Economic Development","education":"Education","housing":"Housing","environment":"Environment","health":"Health","infrastructure":"Infrastructure","energy":"Eletricity","transport":"Transportation","other":"Other"},"input_types":{"text":"Text","number":"Number","date":"Date","yes_no":"Yes/No","select1":"Select one","select":"Select many","location":"Location","image":"Image"}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"update":{"notice":"%{resource_name} was successfully updated."},"destroy":{"notice":"%{resource_name} was successfully destroyed.","alert":"%{resource_name} could not be destroyed."}}},"devise":{"confirmations":{"confirmed":"Your account was successfully confirmed.","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"failure":{"already_authenticated":"","inactive":"Your account is not activated yet.","invalid":"Invalid email or password.","locked":"Your account is locked.","last_attempt":"You have one more attempt before your account will be locked.","not_found_in_database":"Invalid username or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing."},"mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"}},"omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","signed_up":"","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.","updated":"You updated your account successfully.","edit":{"cancel_account":"Cancel my account","cancel_account_text":"Want to delete your account? Once deleted, no account data can be retrieved."}},"sessions":{"signed_in":"","signed_out":"","already_signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."},"sign_in":"Sign in","sign_out":"Sign out","sign_up":"Create an account","create_account":"Create account","existing_account":"Already have an account?","remember_me":"Remember me","forgot_password":"Forgot your password?","cancel_account":"Cancel account","are_you_sure":"Are you sure?"},"app_name":"Promise Tracker","defaults":{"yes_option":"Yes","no_option":"No","save":"Save","cancel":"Cancel","download":"Download","view":"View","share":"Share","share_text":"Check out this campaign on Promise Tracker","edit":"Edit","close":"Close","copy":"Copy","delete":"Delete","back":"Back","next":"Next","loading":"Loading","validations":{"required":"This field is required.","number":"Please enter a valid number.","question_blank":"The question text can't be blank.","no_options":"You must add at least one answer option","has_errors":"Please correct all errors on your form before continuing","no_errors":"Your form looks ready to go!","confirm_save":"Your changes have been saved.","please_define_goals":"Please answer all questions and save to advance","please_create_survey":"Please create your survey to advance","please_complete_campaign_page":"Please complete the campaign page fields and save to advance","launch_campaign":"You must go live with this campaign to advance","close_campaign":"You must close this campaign to advance"}},"layouts":{"header":{"home":"Home"}},"home":{"index":{"welcome":"Get started","tag_line":"Data collection for civic action","project_description":"Promise Tracker is a citizen monitoring platform designed to help communities track local issues \u0026 initiatives and advocate for greater accountability. The Promise Tracker tools allow users to identify key issues that affect their daily lives, organize local data collection campaigns, and create compelling visualizations to drive positive social change.","process_line":"Strategic, community-driven advocacy","process_description":null,"phase_1_title":"Define objective \u0026 build survey","phase_1_description":"Develop the strategy for your data collection campaign by identifying key objectives and the target audiences for collected data. Build a custom survey for use in data collection.","phase_2_title":"Collect data","phase_2_description":"Gather photos, locations, and responses from the field with the mobile app. Track incoming responses online and access guides to help organize \u0026 mobilize data collectors.","phase_3_title":"Share data","phase_3_description":"View collected data in a variety of formats including maps, image galleries, graphs, and data reports to share with key stakeholders both online and offline.","create_account":"Create a free account"},"download":{"download_link":"Download the mobile app","app_description":"With the Promise Tracker mobile app, you can fill out surveys and collect data in your community!"}},"campaigns":{"status":{"active":"Live","closed":"Closed","draft":"Draft","test":"Test","copy":"copy"},"activate":{"upload_error":"Our bad! Your survey not be published. Please try again later.","upload_success":"Your survey has been successfully published!"},"collect":{"status_text":"This survey is ","survey_code":"Download this survey with code","close_confirmation":"Once closed, this survey cannot be opened again.","number_of_responses":"Number of responses","close":"End campaign","confirm_close":"Are you sure you want to close this campaign? NO more data can be collected once the campaign is closed!","responses":{"counting":{"one":"response","other":"responses"}},"current":"Current","target":"Target","publicize_form":"Mobilize your community to fill out the survey","date":"Date","participant_id":"Participant ID","view_more_responses":"View more responses"},"data_report":{"check_out_results":"Check out the results","view_viz":"View the map and graphs of collected during this campaign below"},"edit":{"define_goals":"Overview and goals","type_number":"Type a number","explanations":{"description":"Brief description of what you plan to monitor","goal":"What change do you hope to see as a result of the campaign?","data_collectors":"Who will help you collect data for this campaign?","submissions_target":"How many submissions do you hope to get?","audience":"Who do you plan to share your data with in order to change this issue?"},"tooltip":"Tip","tips":{"goal":"Social change often requires many small steps. Are there any small and concrete changes that you think could be achievable in the near future?","data_collectors":"Who do you know in your community that might be interested in this issue that could help collect data?","submissions_target":"How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?","audience":"There are many audiences you may want to address with the data you collect. Could you reach a new audience who is not already familiar with this issue? Who are the most important groups to convince in order to make change on this issue?"}},"how_to_participate":{"participate_title":"Get involved now!","participate_text":"To help collect data for this campaign, get the mobile app and send in info from your neighborhood!","step":"Step","step_1_text":"Get the app","step_1_subtext":"You'll be using the free Promise Tracker mobile app to collect data.","download_link":"Click here to see how to download.","step_2_text":"Download the survey","step_2_subtext":"Using the mobile app, download the survey with code","step_3_text":"Contribute data","step_3_subtext":"Fill out the survey and see your area's data on the map!"},"index":{"new_campaign":"Start a new campaign","my_campaigns":"My Campaigns","greeting":"Hello","welcome_text":"Welcome to Promise Tracker!","get_started":"Get started by creating your first data collection campaign."},"list_item":{"confirm_delete":"Are you sure you want to delete this campaign?"},"new":{"modal_title":"New Campaign","campaign_theme":"What issue are you interested in monitoring?","campaign_title":"Name of campaign","title_placeholder":"Name","create_campaign":"Create"},"progress_bar":{"define_goals":"Define goals","create_survey":"Create survey","design_campaign_page":"Design campaign page","test_campaign":"Test survey","collect_data":"Collect data","share_data":"Share data"},"campaign_page":{"title":"Campaign page","campaign_page_description":"Below you will design a public page to share information about your campaign. This page can be sent to your networks to spread the word about your data collection initiative.","remain_anonymous":"I prefer to keep the organizers anonymous","view_as_public":"View as the public will see it","preview":"Preview"},"share":{"visualize_data":"Visualize your data","map":"Map","photos":"Photos","graphs":"Graphs","graph_placeholder":"Once you start collecting data, you'll be able to view graphs of your survey results here.","image_placeholder":"No photos have been submitted yet for this survey.","share_data":"Share your data online","data_reports":"Data reports","contact":"Contact person","learn_more":"Learn more about this campaign at ","download_csv":"Download CSV","print_report":"Print report","no_location":"No geographic information available"},"survey":{"edit_survey":"Edit survey"},"tabs":{"overview":"Overview","survey":"Survey","campaign_page":"Campaign page","data":"Responses","viz":"Visualizations"},"test":{"test_title":"Survey test","how_to_test":"How to test","test_explanation":"Before going live with your campaign, try downloading your survey on a phone to make sure the questions appear as you intended.","catch_errors":"Now is the time to catch any mistakes!","warning":"Once you go live, you can no longer change your survey.","step_3_text":"Test the survey","step_3_subtext":"Fill out the survey and verify that all questions are written correctly and are in the right order.","edit_survey":"Edit survey","go_live":"Go live","confirm_launch":"Are you sure you want to go live? Once you go live you can no longer change your survey!","test_complete":"Test complete - This campaign is now "}},"surveys":{"android_preview":{"no_questions":"No questions","add_questions":"Choose a question type above to get started.","question":"Question","of":"of"},"survey_body":{"required":"Question required?","options":"Options","add_new_option":"Click to add an option","question_label":"Question text","question_placeholder":"Type your question here","answer_type":"Type of answer","select_one":"Select one","select_many":"Select all that apply","preview":{"date":"13 Jan, 2014","number":"123","string":"Abc"}},"survey_builder":{"untitled":"Untitled","survey_title":"Survey title","title_placeholder":"Type survey title here","editor_title":"Toolbar","add_question":"Add question","add_location":"Record location","add_image":"Take photo","option_1":"Option 1","preview_title":"Preview","show_preview":"Show preview","hide_preview":"Hide preview","confirm_input_delete":"Are you sure you want to delete this input?","finalize_survey":"Complete survey design"}},"users":{"show":{"add_email":"Add email","edit_campaign_page":"Edit campaign page"}}},"de":{"errors":{"messages":{"in_between":"muss zwischen %{min} und %{max} sein","spoofed_media_type":"trägt eine Dateiendung, die nicht mit dem Inhalt der Datei übereinstimmt"}},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}}},"es":{"errors":{"messages":{"in_between":"debe estar entre %{min} y %{max}","spoofed_media_type":"tiene una extensión que no coincide con su contenido"}},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}}},"ja":{"errors":{"messages":{"in_between":"の容量は%{min}以上%{max}以下にしてください。","spoofed_media_type":"の拡張子と内容が一致していません。"}},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}}},"pt-BR":{"errors":{"messages":{"in_between":"deve ter entre %{min} e %{max}","spoofed_media_type":"tem uma extensão que não corresponde ao seu conteúdo","already_confirmed":"já foi confirmada, por favor faça login","confirmation_period_expired":"precisa ser confirmada dentro de %{period}, por favor peça uma nova","expired":"expirou, por favor solicite uma nova","not_found":"não encontrada","not_locked":"não estava travada","not_saved":{"one":"1 erro impediu a gravação de %{resource}:","other":"%{count} erros impediram a gravação de %{resource}:"}},"sorry":"Desculpe!","hmm":"Hmmm...","resource_not_found":"Não conseguimos encontrar essa página","forbidden":"Accesso não autorizado","internal_error":"Algo aconteceu"},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}},"devise":{"confirmations":{"confirmed":"Sua conta foi confirmada com sucesso.","send_instructions":"Você receberá um email para confirmar sua conta em alguns minutis.","send_paranoid_instructions":"Caso seu endereço de email já exista em nossa base, você receberá um email com instruções sobre como ativar sua conta."},"failure":{"already_authenticated":"","inactive":"Sua conta ainda não foi ativada.","invalid":"Email ou senha inválidos.","locked":"Sua conta está travada.","last_attempt":"Você tem mais uma tentativa antes que sua conta seja travada.","not_found_in_database":"Email ou senha inválidos.","timeout":"Para sua segurança sua sessão expirou. Por favor, faça login novamente.","unauthenticated":"Você precisa se logar ou registrar antes de prosseguir.","unconfirmed":"Você precisa confirmar sua conta antes de prosseguir."},"mailer":{"confirmation_instructions":{"subject":"Instruções para confirmação"},"reset_password_instructions":{"subject":"Instruções para reiniciar sua senha"},"unlock_instructions":{"subject":"Instruções para destravar sua senha"}},"omniauth_callbacks":{"failure":"Não pudemos autenticá-lo em %{kind} por causa de \"%{reason}\".","success":"Autenticado com sucesso na conta %{kind}."},"passwords":{"no_token":"Você não pode acessar essa página vindo do email para reiniciar sua senha. Se você está vindo do email para reiniciar sua senha, por favor, certifique-se de estar usando a URL correta.","send_instructions":"Você receberá um email com instruções de como reiniciar sua senha em alguns minutos.","send_paranoid_instructions":"Se o seu endereço de email estiver em nossa base de dados, em alguns minutos você receberá um link para recuperar sua senha em seu email.","updated":"Você alterou sua senha com sucesso. Você está logado.","updated_not_active":"Sua senha foi alterado com sucesso."},"registrations":{"destroyed":"Até mais! Sua conta foi cancelada com sucesso. Esperamos vê-lo novamente em breve.","user":{"signed_up":"","signed_up_but_inactive":"Você se registrou com sucesso. No entanto, não podemos logá-lo, pois você ainda não ativou sua conta.","signed_up_but_locked":"Você se registrou com sucesso. No entanto, não podemos logá-lo, pois sua conta está travada.","signed_up_but_unconfirmed":"Uma mensagem com um link de confirmação foi enviada para seu endereço de email. Por favor abra o link para ativar sua conta.","update_needs_confirmation":"Sua conta foi atualizada, mas precisamos verificar seu endereço de email. Por favor cheque seu email e clique no link de confirmação para confirmar seu novo endereço de email."},"updated":"Você atualizou sua conta com sucesso.","edit":{"cancel_account":"Cancelar conta","cancel_account_text":"Você desejar eliminar a sua conta? Uma vez eliminado, seus dados não poden se recuperar."}},"sessions":{"user":{"signed_in":"","signed_out":""}},"unlocks":{"send_instructions":"Você receberá um email com instruções sobre como destravar sua conta em alguns minutos.","send_paranoid_instructions":"Se sua conta existir, você receberá um email com instruções sobre como destravá-la em alguns minutos.","unlocked":"Sua conta foi destrava com sucesso. Por favor, faça login para continuar."},"sign_in":"Fazer login","sign_out":"Sair","sign_up":"Criar uma conta","create_account":"Criar conta","existing_account":"Você já tem uma conta?","remember_me":"Remember me","forgot_password":"Esqueceu sua senha?","cancel_account":"Cancelar conta","are_you_sure":"Você tem certeza?"},"app_name":"Monitorando a Cidade","activerecord":{"errors":{"models":{"user":{"attributes":{"password":{"too_short":"deve ter pelo menos 8 caracteres","blank":"não pode estar em branco"},"password_confirmation":{"confirmation":"não coincide com a senha"},"username":{"taken":"já existe. Por favor, escolha outro nome de usuário","blank":"não pode estar em branco"}}},"campaign":{"attributes":{"title":{"too_short":"deve ter pelo menos 5 caracteres"}}}}},"models":{"survey":"Formulário","campaign":"Campanha","input":"Pergunta","user":"Usuário"},"attributes":{"campaign":{"title":"Nome","description":"Descrição","goal":"Objetivo","submissions_target":"Número de registros desejados","data_collectors":"Colaboradores","audience":"Destinatários","status":"Estado","start_date":"Data de publicação","end_date":"Data final","theme":"Tema","organizers":"Organizadores da campanha"},"input":{"input_type":"Tipo de resposta"},"survey":{"title":"Título"},"user":{"username":"Nome de usuário","bio":"Biografia / Descrição","password":"Senha","password_confirmation":"Confirmação de senha","current_password":"Senha atual","email":"E-mail"}},"options":{"themes":{"select":"Selecionar","economics":"Desenvolvimento social","education":"Educação","housing":"Habitação","environment":"Meio ambiente","transport":"Mobilidade Urbana","health":"Saúde","infrastructure":"Infra-estrutura","energy":"Eletricidade","other":"Outra"},"input_types":{"text":"Texto","number":"Número","date":"Data","yes_no":"Sim/Não","select1":"Selecionar uma","select":"Selecionar várias","location":"Localização","image":"Imagem"}}},"defaults":{"yes_option":"Sim","no_option":"Não","save":"Salvar","cancel":"Cancelar","download":"Baixar","view":"Ver","share":"Compartilhe","share_text":"Check out this campaign on Promise Tracker","edit":"Editar","close":"Fechar","copy":"Duplicar","delete":"Eliminar","back":"Voltar","next":"Próximo","loading":"Carregando dados","validations":{"required":"Este campo \u0026eacute; requerido.","number":"Por favor, forne\u0026ccedil;a um n\u0026uacute;mero v\u0026aacute;lido.","question_blank":"O texto da pergunta não pode estar em branco.","no_options":"Você precisa adicionar pelo menos uma opção","has_errors":"Seu formulário tem algum erro. Por favor corrija as questões com erros antes de continuar","no_errors":"Seu formulário não tem erros.","confirm_save":"Suas modificações foram salvadas","please_define_goals":"Por favor complete as perguntas e salve para avançar","please_create_survey":"Por favor crie seu formulário para poder avançar","please_complete_campaign_page":"Por favor preencha os campos da página da campanha e salve para avançar","launch_campaign":"Você precisa lançar esta campanha para avançar","close_campaign":"Você precisa fechar esta campanha para avançar"}},"layouts":{"header":{"home":"Página inicial"}},"home":{"index":{"welcome":"Começar com Promise Tracker","tag_line":"Coleta de dados para a ação cívica","project_description":"Monitorando a Cidade é uma plataforma de monitoramento desenhada para ajudar comunidades, indivíduos e organizações da sociedade civil a monitorar compromissos do poder público e, desta forma, demandar uma maior responsabilidade cívica dos gestores e políticos. As ferramentas do Monitorando a Cidade ajudam cidadãos a identificar temas importantes que afetam sua vida cotidiana, a organizar campanhas locais de coleta de dados e a criar visualizações interessantes para promover transformações sociais positivas.","process_line":"O Nosso Processo","process_description":null,"phase_1_title":"Definir campanha \u0026 criar formulário","phase_1_description":"","phase_2_title":"Coletar dados no campo","phase_2_description":"","phase_3_title":"Compartilhar \u0026 visualizer dados","phase_3_description":"","create_account":"Criar uma conta gratuita"},"download":{"download_link":"Baixar o aplicativo móvel","app_description":"Com o aplicativo móvel, você pode preencher formulários criados com Monitorando a Cidade e coletar dados!"}},"campaigns":{"status":{"active":"Ativo","closed":"Fechado","draft":"Rascunho","test":"Teste","copy":"cópia"},"activate":{"upload_error":"Desculpe. Seu formulário não foi lançado.","upload_success":"Seu formulário foi lançado com sucesso!"},"collect":{"status_text":"Esta campanha está ","survey_code":"Você pode baixar e preencher este formulário usando o código","close_confirmation":"Se você encerrar esta campanha, não poderá coletar mais dados.","number_of_responses":"Número de registros","close":"Encerrar campanha","confirm_close":"Tem certeza que quer fechar esta campanha? Não vai poder coletar mais dados!","publicize_form":"Compartilhe em suas redes","responses":{"counting":{"one":"registro","other":"registros"}},"current":"Atual","target":"Desejado","date":"Data","participant_id":"Código do participante","view_more_responses":"Ver mais registros"},"data_report":{"check_out_results":"Checar os resultados","view_viz":"Veja abaixo os gráficos dos dados coletados nesta campanha"},"edit":{"define_goals":"Definição da campanha","type_number":"Digite um Número","explanations":{"description":"Descrição breve da campanha","goal":"O que você quer mudar na sua comunidade com esta campanha?","organizers":"Qual grupo ou associação está organizando a campanha?","data_collectors":"Quem vai coletar os dados para esta campanha?","submissions_target":"Quantos registros você espera conseguir durante a coleta de dados?","audience":"Para melhorar a qualidade de vida na cidade, com quem você vai compartilhar os dados coletados?"},"tooltip":"Dica","tips":{"data_collectors":"Entre seus conhecidos, quem já está comprometido com a solução deste problema? Quem toparia trabalhar com você para coletar dados nesta campanha?","goal":"Mudanças sociais normalmente começam com pequenos passos. O que é possível alcançar no futuro próximo no tema escolhido?","submissions_target":"Pense em quantos registros você deve obter para ter uma amostra representativa do problema e quantas você consegue coletar no intervalo de tempo de que dispõe.","audience":"Existem muitos destinatários possíveis. Quem terá maior interesse nestes dados? Quais públicos utilizariam seus dados para promover uma mudança real?"}},"how_to_participate":{"participate_title":"Ajude com a coleta de dados!","participate_text":"Baixe o aplicativo móvel e mande informações da sua area","step":"Passo","step_1_text":"Baixe o aplicativo móvel","download_link":"Clique aqui para ver como baixar","step_2_text":"Baixe o formulário","step_2_subtext":"Use o código seguinte para baixar","step_3_text":"Preencha o formulário","step_3_subtext":"Envie seus dados para vê-los no mapa da campanha!"},"index":{"new_campaign":"Criar uma nova campanha","my_campaigns":"Minhas campanhas","greeting":"Oi","welcome_text":"Bem-vindo ao site Monitorando a Cidade!","get_started":"Que tal criar sua primeira campanha?"},"list_item":{"confirm_delete":"Você tem certeza que quer eliminar esta campanha?","confirm_clone":"Você em certeza que quer duplicar esta campanha?"},"new":{"modal_title":"Nova campanha","campaign_theme":"Qual o tema do seu interesse?","campaign_title":"Nome da campanha","title_placeholder":"Nome da campanha","create_campaign":"Criar"},"progress_bar":{"define_goals":"Definir campanha","create_survey":"Criar formulário","design_campaign_page":"Preparar página da campanha","test_survey":"Testar formulário","collect_data":"Coletar dados","share_data":"Compartilhar dados"},"campaign_page":{"title":"Página da campanha","campaign_page_description":"Sua campanha vai ter uma página na internet. Você pode usá-la para convidar seus amigos nas redes socias para ajudar com a coleta de dados. No formulário abaixo você pode alterar a apresentação desta página.","view_as_public":"Pré visualizar como público","remain_anonymous":"Prefiro que os organizadores fiquem anónimos","preview":"Pré visualização"},"share":{"visualize_data":"Vizualizar seus dados","map":"Mapa","photos":"Fotos","graphs":"Gráficos","graph_placeholder":"Quando tiver registros, vai poder visualizar o agregado dos dados aqui.","image_placeholder":"Não há fotos coletadas ainda para este formulário","share_data":"Compartilhe seus dados","data_reports":"Relatório de dados","campaign_organizers":"Organizadores da campanha","learn_more":"Aprender mais sobre esta campanha no site","download_csv":"Baixar CSV","print_report":"Imprimir relatório","no_location":"Não há informações geográficas disponíveis"},"survey":{"edit_survey":"Editar formulário"},"tabs":{"goals":"Definição","survey":"Formulário","campaign_page":"Página da campanha","data":"Dados","viz":"Visualizações"},"test":{"test_title":"Teste do formulário","test_explanation":"Antes de lançar sua campanha, teste o formulário no aplicativo móvel para confirmar que tudo esteja certo.","catch_errors":"Agora é o momento de achar todos os erros!","how_to_test":"Como testar","step_3_text":"Testar o formulário","step_3_subtext":"Preencha o formulário e Confirme que tudo esteja bem escrito e em ordem","warning":"Depois de lançar, você não vai poder modificar o formulário.","edit_survey":"Editar formulário","go_live":"Lançar campanha","confirm_launch":"Tem certeza que deseja lançar esta campanha? Uma vez lançado, o formulário não pode mais ser modificado!","test_complete":"Teste completado - Esta campanha está"}},"surveys":{"android_preview":{"preview_title":"Pré visualização no celular:","no_questions":"Formulário vazio","add_questions":"Escolha uma das opções acima para começar.","question":"Pergunta","of":"de","close_preview":"Fechar pré visualização"},"survey_body":{"required":"Pergunta obrigatoria?","options":"Opções","add_new_option":"Clique para adicionar uma opção","question_label":"Texto da pergunta","question_placeholder":"Digite a pergunta aqui","answer_type":"Tipo de resposta","select_one":"Selecione uma","select_many":"Selecione (pode ser mais de uma)","preview":{"date":"13 Jan, 2014","number":"123","string":"Abc"}},"survey_builder":{"untitled":"Sem títiulo","survey_title":"Título do formulário","title_text":"Digite o títiulo aqui","editor_title":"Barra de Ferramentas","add_question":"Adicionar pergunta","add_location":"Obter localização","add_image":"Obter foto","option_1":"Opção 1","preview_title":"Pré-visualização","show_preview":"Mostrar pré visualização","hide_preview":"Esconder pré visualização","confirm_input_delete":"Tem certeza que deseja eliminar este campo?","finalize_survey":"Concluir formulário"}},"users":{"show":{"add_email":"Adicionar e-mail","edit_campaign_page":"Editar perfil"}}},"zh-CN":{"errors":{"messages":{"in_between":"文件大小必须介于 %{min} 到 %{max} 之间","spoofed_media_type":"扩展名与内容类型不符"}},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}}},"zh-HK":{"errors":{"messages":{"in_between":"必須介於%{min}到%{max}之間","spoofed_media_type":"副檔名與內容類型不匹配"}},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}}},"zh-TW":{"errors":{"messages":{"in_between":"檔案大小必須介於 %{min} 到 %{max} 之間","spoofed_media_type":"副檔名與內容類型不符"}},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}}}};